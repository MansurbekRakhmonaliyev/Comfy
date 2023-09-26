import { useLoaderData } from "react-router-dom"
import { Filters, PaginationContainer, ProductsContainer } from "../components"
import { customFetch } from "../components/utils"

const url = '/products'
export const loader = async ({ request }) => {
  
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
  const response = await customFetch(url, {
    params
  });
  const product = response.data.data;
  const meta = response.data.meta;
  return { product, params, meta };
};
function Products() {
  // const {data, meta} = useLoaderData()
  return (
    <div className="container-ms">
     <Filters/>
     <ProductsContainer/>
     <PaginationContainer/>
    </div>
  )
}

export default Products
