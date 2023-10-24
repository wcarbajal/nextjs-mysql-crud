import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
    try {
      const result = await conn.query("Select * from product")

      return NextResponse.json(result)  
      
    } catch (error) {
      return NextResponse.json({
        message: error.message
      },
      {
        status: 400
      })
    }
  
}

export async function POST(request){
 try {
  const { name, description, price} = await request.json();
  
  const result = await conn.query("INSERT INTO product SET ?", {
    name, description, price
  })
  console.log(result)
  return NextResponse.json({
   id: result.insertId, name, description, price
  })
 } catch (error) {
  return NextResponse.json({
    message: error.message,
  },
   { status: 500,
  }
  )
 }
}

