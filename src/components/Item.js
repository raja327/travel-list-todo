export default function Item({ item, onDeleteForm, onCheckedItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onCheckedItem(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteForm(item.id)}>❌</button>
    </li>
  );
}
