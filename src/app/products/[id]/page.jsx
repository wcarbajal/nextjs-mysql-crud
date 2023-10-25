import axios from "axios"
import Buttons from "./Buttons"
import Link from "next/link"

function loadProduct(productId) {

  return axios.get(`http://localhost:3000/api/products/${productId}`)
}

async function ProductPage({ params }) {

  const { data: product } = await loadProduct(params.id)

  

  return (
    
    <section className="flex justify-center items-center">
      <div className="p-6 bg-white">
        <h1 className='text-2xl text-gray-500 font-bold'>Nombre: {product.name}</h1>
        <p className='text-gray-400 text-lg'>Precio: {product.price}</p>
        <p className='text-gray-400'>Descripción: {product.description}</p>
        <Buttons productId={ product.id} />
      </div>

    </section>
    
  )
}

export default ProductPage
