import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(false)
  const [view, setView] = useState('card') // 'card' or 'table'

  // Fetch all countries on mount
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

  // Fetch stats when a country is selected
  useEffect(() => {
    if (!selectedCountry) return
    setLoading(true)
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

      {/* Debug: confirm data is coming in */}
      <p>Countries loaded: {countries.length}</p>
      <p>Selected: {selectedCountry || 'None'}</p>
      <p>Loading: {loading ? 'Yes' : 'No'}</p>
      {stats && <p>Cases: {stats.cases}</p>}
    </div>
  )
}

export default App