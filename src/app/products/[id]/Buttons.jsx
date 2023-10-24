'use client';
import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({productId}) {

  const router = useRouter();

  return (

    <div className="flex justify-end gap-4 mt-2">
      <button className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded-md w-24" onClick={ async () =>{
        if (confirm('Are you sure you want to?')) {
          const respuesta = await axios.delete('/api/products/' + productId)
          if (respuesta.status === 204){
              router.push('/products')
          }
  
      }}}>Delete</button>
      <button className=" text-white bg-gray-500 hover:bg-gray-700 py-2 px-3 rounded-md w-24">Edit</button>
    </div>
  )
}

export default Buttons
