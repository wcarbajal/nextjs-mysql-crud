import Link from "next/link"


function ProductCard({product}) {
  
  return (
    <Link className='bg-white p-4 rounded-md border-gray-800 hover:bg-gray-300 ' 
      href={`/products/${product.id}`}>
      <h1 className='text-2xl text-gray-500 font-bold'>{product.name}</h1>
      <p className='text-gray-400 text-lg'>{product.price}</p>
      <p className='text-gray-400'>{product.description}</p>
    </Link>
  )
}

export default ProductCard
