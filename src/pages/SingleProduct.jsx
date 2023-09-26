import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../components/utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);
  const product = await req.data.data;
  return product;
};
function SingleProduct() {
  const [amount, setAmount] = useState(1)
  const product = useLoaderData();
  const { title, price, image, company, description, colors } = product.attributes;
  const [activeColor, setActiveColor] = useState(colors[0]);
  const handleAmount = (e)=>{
    setAmount(+e.target.value)
  }
  return (
    <section className="container-ms py-20">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-6">
          <img
            src={image}
            alt=""
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
          <div>
            <h1 className="font-bold text-3xl capitalize">{title}</h1>
            <h3 className="mt-3 capitalize text-neutral-content tracking-wider">
              {company}
            </h3>
            <p className="text-xl mt-3">${price / 100}</p>
            <p className="mt-6 leading-8">{description}</p>
         <div className="form-control w-full max-w-xs">
          <h4 className="flex flex-col gap-y-5 text-md font-medium tracking-wider capitalize">
            <span>Colors:</span>
            <span>
            <span>
            {colors.map((item) => {
              return (
                <button
                  key={item}
                  type="button"
                  className={`badge w-6 h-6 mr-2  ${(activeColor === item) ? 'border-secondary border-2' : ''}`}
                  style={{ backgroundColor: item }}
                  onClick={()=>setActiveColor(item)}
                ></button>
              );
            })}
          </span>
            </span>
          </h4>
         </div>
         <div className="form-control">
              <label htmlFor="" className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Amount:
                </h4>
              </label>
              <select
                name=""
                id=""
                className="select select-secondary select-bordered select-md"
                value={amount}
                onChange={handleAmount}
              >
                {
                  new Array(20).fill('').map((_,idx)=>idx+1).map(item=>{
                    return <option key={item} value={item}>{item}</option>
                  })
                }
              </select>
            </div>
            <button className="btn btn-secondary btn-md mt-10">ADD TO BAG</button>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default SingleProduct;
