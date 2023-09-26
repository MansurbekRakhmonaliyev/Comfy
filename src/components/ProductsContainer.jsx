import React, { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { useLoaderData } from 'react-router-dom'

function ProductsContainer() {
  const {meta} = useLoaderData()
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')
  const setActiveStyles = (style)=>{
    return `text btn btn-circle btn-sm ${
      style == layout
      ? 'btn btn-primary text-primary-content'
      : 'btn btn-ghost text-based-content'
    }`
  }
  return (
    <>
    <div className='flex justify-between items-center mt-8 border-b  border-base-300 pb-5'>
        <h4 className='font-medium text-md'>
          {totalProducts} product{totalProducts.length > 1 && 's'}
        </h4>
        <div className='flex gap-x-2'>
          <button type='button' className={setActiveStyles('grid')} onClick={()=>setLayout('grid')}>
            <BsFillGridFill/>
          </button>
          <button type='button' className={setActiveStyles('list')} onClick={()=>setLayout('list')}>
            <BsList/>
          </button>

        </div>
    </div>
     <div>
     {totalProducts.length == 0 
     ? <h4 className='text-2xl mt-16'>
      Sorry, no product matched your search ...
     </h4>
      : layout == 'grid' ? <ProductsGrid/> : <ProductsList/>}
     </div>
    </>
  )
}

export default ProductsContainer
