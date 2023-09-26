import ProductsGrid from "./ProductsGrid"
import SectionTitle from "./SectionTitle"

function FeaturedProducts() {
  return (
    <div className="container-ms">
      <SectionTitle text="Featured Products"/>
      <ProductsGrid/>
    </div>
  )
}

export default FeaturedProducts
