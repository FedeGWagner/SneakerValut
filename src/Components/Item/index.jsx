import { Link } from 'react-router-dom';

function Item({ id, name, imageSrc, imageAlt, price, color }) {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`/item/${id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
            </div>
        </div>
    );
}

export default Item;
