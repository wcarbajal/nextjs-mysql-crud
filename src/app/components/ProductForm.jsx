'use client'
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation/";

function ProductForm() {

    const router = useRouter()
    const form = useRef(null);
    const params = useParams()
    

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ""
    })



    const handleChange = e => {
        
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (params.id) {
            axios.get('/api/products/' + params.id)
                .then(res => {
                    setProduct(
                        {
                            name: res.data.name,
                            price: res.data.price,
                            description: res.data.description

                        })
                })
        }

    }, [])


    const handleClear = () => {
        form.current.reset();
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('/api/products', product)
        form.current.reset();
        router.push('/products')
        router.refresh()


    }
    return (
        <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} ref={form}>
            <label htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
            <input value={product.name} name="name" type="text" placeholder="name" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" autoFocus />

            <label htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-2">Product Price</label>
            <input value={product.price} name="price" type="text" placeholder="price" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" />

            <label htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2">Product Description</label>
            <textarea value={product.description} name="description" rows={3} placeholder="description" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3" />
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
