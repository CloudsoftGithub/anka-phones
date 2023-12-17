import products from "@/models/products";
import { NextResponse } from "next/server";

//post
export async function POST(req) {
    try {
       
        const body = await req.json();
        const newproduct = await products.create(body)
        return NextResponse.json({ msg: ["successfully created"], newproduct }, { status: 200 });

    } catch (error) {
        return NextResponse.json("error in creating post")
    }
}

//get

export async function GET(req) {
    try {
        
        const prod = await products.find();
        return NextResponse.json(prod);

    } catch (error) {
        return NextResponse.json("fail to populate data")

    }
}

//delete
export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id")
     
        await products.findByIdAndDelete(id)
        return NextResponse.json("succesfully deleted")
    } catch (error) {
        return NextResponse.json("unable to delete")
    }
}
