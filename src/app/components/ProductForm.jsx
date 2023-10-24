'use client'
import { useRef, useState } from "react";
import axios from "axios";
import {useRouter} from "next/navigation/";

function ProductForm() {
  
  const router = useRouter()

    const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: ""
  })
  
  const form = useRef(null);

  const handleChange = e => {
    //console.log(e.target.value, e.target.name);
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }
const handleClear = () => {
  form.current.reset();
}
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const res = await axios.post('/api/products', product)    
    form.current.reset();
    router.push('/products')
    
    
  }
  return (
    <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} ref={form}>
      <label htmlFor="name"
        className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
      <input name="name" type="text" placeholder="name" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" autoFocus/>

      <label htmlFor="price"
        className="block text-gray-700 text-sm font-bold mb-2">Product Price</label>
      <input name="price" type="text" placeholder="price" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" />

      <label htmlFor="description"
        className="block text-gray-700 text-sm font-bold mb-2">Product Description</label>
      <textarea name="description" rows={3} placeholder="description" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" />
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 m-2 rounded"> Save product</button>
        <button
          className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 m-2 rounded" onClick={handleClear}> Clear product</button>
      </div>
    </form>
  )
}

export default ProductForm
