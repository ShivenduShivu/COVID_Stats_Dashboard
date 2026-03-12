function StatsCard({ stats }) {
  const cards = [
    {
      label: '🧪 Total Cases',
      value: stats.cases,
      color: '#e67e22',
      bg: '#fef9f0',
    },
    {
      label: '💚 Recovered',
      value: stats.recovered,
      color: '#27ae60',
      bg: '#f0faf4',
    },
    {
      label: '💀 Deaths',
      value: stats.deaths,
      color: '#e74c3c',
      bg: '#fdf0f0',
    },
  ]

  return (
    <div className="cards-wrapper">
      {cards.map(card => (
        <div
          key={card.label}
          className="card"
          style={{ borderLeft: `5px solid ${card.color}`, background: card.bg }}
        >
          <p className="card-label">{card.label}</p>
          <p className="card-value" style={{ color: card.color }}>
            {card.value.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  )
}

export default StatsCard