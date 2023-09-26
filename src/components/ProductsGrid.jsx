import { Link, useLoaderData } from "react-router-dom";

function ProductsGrid() {
  const {product} = useLoaderData();
  return (
    <div className="pt-12 grid  gap-4 md:grid-cols-2 lg:grid-cols-3">
      {product.map((item) => {
        const { title, image, price } = item.attributes;
        return (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
                <img src={image} alt=""  className="rounded-xl h-64 md-h-48 w-full object-cover"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title capitalize tracking-wider">{title}</h2>
                <span className="text-secondary font-medium">${price / 100}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
