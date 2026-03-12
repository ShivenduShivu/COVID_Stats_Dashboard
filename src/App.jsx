import { useState, useEffect } from 'react'
import CountryDropdown from './components/CountryDropdown'
import StatsCard from './components/StatsCard'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState('card')

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) =>
          a.country.localeCompare(b.country)
        )
        setCountries(sorted)
      })
      .catch(err => console.error('Fetch error:', err))
  }, [])

  useEffect(() => {
    if (!selectedCountry) return
    setLoading(true)
    setStats(null)
    fetch(`https://disease.sh/v3/covid-19/countries/${selectedCountry}`)
      .then(res => res.json())
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Fetch error:', err)
        setLoading(false)
      })
  }, [selectedCountry])

  return (
    <div className="app">
      <h1>🦠 COVID Stats Dashboard</h1>

      <CountryDropdown
        countries={countries}
        selectedCountry={selectedCountry}
        onSelect={setSelectedCountry}
      />

      {loading && <p className="loading">⏳ Loading...</p>}

      {!loading && !stats && (
        <p className="empty">👆 Select a country to see stats</p>
      )}

      {!loading && stats && (
        <div>
          <h2 className="country-title">
            <img src={stats.countryInfo.flag} alt="" className="flag" />
            {stats.country}
          </h2>
          <StatsCard stats={stats} />
        </div>
      )}
    </div>
  )
}

export default App