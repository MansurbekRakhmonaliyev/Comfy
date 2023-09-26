import { Link, useLoaderData } from "react-router-dom";


function ProductsList() {
    const {product} = useLoaderData();
    return (
      <div className="mt-12 grid gap-y-8">
        {product.map((item) => {
          const { title, image, price, company } = item.attributes;
          return (
            <Link
              to={`/products/${item.id}`}
              key={item.id}
              className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            >
              <img src={image} alt={title}  className="h-24 w-24 sm:h-32 object-cover group-hover:scale-105 transition duration-300 rounded-lg"/>
              <div className="ml-0 sm:ml-16">
                  <h3 className="text-lg capitalize font-medium">{title}</h3>
                  <h4 className="capitalize font-medium text-lg text-neutral-content">{company}</h4>
              </div>
                  <p className="ml-0 sm:ml-auto text-lg font-medium">${price / 100}</p>
            </Link>
          );
        })}
      </div>
    );
}

export default ProductsList
