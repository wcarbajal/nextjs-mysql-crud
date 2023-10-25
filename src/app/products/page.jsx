
import axios from "axios"
import ProductCard from "../components/ProductCard"
import Link from "next/link"
async function loadProducts() {
  const {data} = await axios.get('http://localhost:3000/api/products')
  return data
}

async function ProductsPage() {
 const products = await loadProducts()
  
  return (
    <>
    <div>
        <Link className="text-white" href={"/new"}>Agregar</Link>
    </div>
    
    <div className='text-white grid gap-4 grid-cols-4'>
      { products.map( product => <ProductCard key={product.id} product={product} />)
       

      }
    </div>
    </>
  )
}

export default ProductsPage
