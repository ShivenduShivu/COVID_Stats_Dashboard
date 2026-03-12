function StatsTable({ stats }) {
  const rows = [
    { label: '🧪 Total Cases', value: stats.cases, color: '#e67e22' },
    { label: '💚 Recovered',   value: stats.recovered, color: '#27ae60' },
    { label: '💀 Deaths',      value: stats.deaths, color: '#e74c3c' },
  ]

  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.label}>
            <td>{row.label}</td>
            <td style={{ color: row.color, fontWeight: 'bold' }}>
              {row.value.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default StatsTable