export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between p-3 bg-black rounded-lg mb-2 shadow border-blue">
      <span className="font-semibold">{name}</span>
      <span>Qty: {quantity}</span>
      <span className="italic text-gray-500">{category}</span>
    </li>
  );
}
