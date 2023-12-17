import products from "@/models/products";
import { NextResponse } from "next/server";

export async function GET (req, {params:{id}}){
    try {
     
      const newprod = await products.findOne({_id:id})
      return NextResponse.json(prod1)

    } catch (error) {
        return NextResponse.json("error in fetching single id");
    }
}