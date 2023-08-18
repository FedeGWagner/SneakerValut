import Item from "../Item"

function ItemList({ products }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Mira los ultimos ingresos!</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((prod) => (
                        <Item key={prod.id} {...prod} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ItemList