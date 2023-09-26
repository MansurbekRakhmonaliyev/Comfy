import {Hero, FeaturedProducts} from "../components"
import { customFetch } from "../components/utils"

const url = '/products?featured=true'
export  const loader = async ()=>{
  const req = await customFetch(url)
  const product = req.data.data
  return {product}
}
function Landing() {
  return (
    <>
     <Hero/> 
     <FeaturedProducts/>
    </>
  )
}

export default Landing
