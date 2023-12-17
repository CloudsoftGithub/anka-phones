import products from "@/models/products";
import { NextResponse } from "next/server";


export async function GET (req, {params:{id}}){
    try {
     
      const prod1 = await products.findOne({_id:id})
      return NextResponse.json(prod1)

    } catch (error) {
        return NextResponse.json("error in fetching single id");
    }
}

export async function PUT ({params:{id}, req}){
try {
   
    const body = await req.json();
    const updateprod1 = await products.findByIdAndUpdate(id,body);
    return NextResponse.json({msg:"updated", updateprod1});
} catch (error) {
    return NextResponse.json("unable to update");
    
}
}