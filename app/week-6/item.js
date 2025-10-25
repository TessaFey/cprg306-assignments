export default function Item({ name, quantity, category }) {
    return (
    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md text-white mb-2">
        <div className="flex flex-col">
            <span className="text-lg font-bold">Name: {name}
            </span>
            <span className="text-lg font-bold">Category: {category}
            </span>
            <span className="text-lg font-bold">Quantity: {quantity}
            </span>
        </div>
    </li>
    )
}

