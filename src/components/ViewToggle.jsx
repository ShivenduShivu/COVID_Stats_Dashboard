function ViewToggle({ view, onToggle }) {
  return (
    <div className="toggle-wrapper">
      <button
        className={`toggle-btn ${view === 'card' ? 'active' : ''}`}
        onClick={() => onToggle('card')}
      >
        🃏 Card View
      </button>
      <button
        className={`toggle-btn ${view === 'table' ? 'active' : ''}`}
        onClick={() => onToggle('table')}
      >
        📋 Table View
      </button>
    </div>
  )
}

export default ViewToggle