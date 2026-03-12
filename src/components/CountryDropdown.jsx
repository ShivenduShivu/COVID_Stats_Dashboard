function CountryDropdown({ countries, selectedCountry, onSelect }) {
  return (
    <div className="dropdown-wrapper">
      <label htmlFor="country-select">🌍 Select a Country:</label>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={e => onSelect(e.target.value)}
      >
        <option value="">-- Choose a country --</option>
        {countries.map(c => (
          <option key={c.countryInfo._id ?? c.country} value={c.country}>
            {c.country}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CountryDropdown