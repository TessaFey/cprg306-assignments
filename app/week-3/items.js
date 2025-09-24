function Item({ name, quantity, category }) {
    return (
    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md text-white mb-2">
        <div className="flex flex-col">
            <span className="text-lg font-bold">name
            </span>
            <span className="text-lg font-bold">Category: {category}
            </span>
        </div>
            <span className="text-lg font-bold">Quantity: {quantity}
            </span>
    </li>
    )
}