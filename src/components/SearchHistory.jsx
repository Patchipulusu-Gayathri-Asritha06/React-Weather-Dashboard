export default function SearchHistory({ history, onSelect }) {
  if (history.length === 0) return null;

  return (
    <div className="history">
      <h4>Recent Searches</h4>
      <ul>
        {history.map((city, index) => (
          <li key={index} onClick={() => onSelect(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
