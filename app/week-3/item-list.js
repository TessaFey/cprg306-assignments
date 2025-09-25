import Item from "./items";

export default function ItemList() {
  const items = [
    { name: "Mango", quantity: 2, category: "Fruit" },
    { name: "Lego", quantity: 1, category: "Toy" },
    { name: "Pineapple", quantity: 4, category: "Fruit" },
    { name: "Milk", quantity: 1, category: "Dairy" },
    { name: "yogurt", quantity: 6, category: "Dairy" },
  ];
  return (
    <ul className="">
      {items.map((item) => (
        <Item
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}