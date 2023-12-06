export default function Item({ name, quantity, category, onItemClicked }) {
  return (
    <div
      className="m-1 p-1 border-x-cyan-600 border-2 hover:bg-blue-200"
      onClick={() => onItemClicked(name)}
    >
      <h3>{name}</h3>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
