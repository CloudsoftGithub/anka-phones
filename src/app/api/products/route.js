import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newproduct = await Products.create(body);
    return NextResponse.json(
      { msg: ["successfully created"], newproduct },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json("error in creating post");
  }
}

export async function GET() {
  try {
    const prodt = await Products.find();
    return NextResponse.json(prodt);
  } catch (error) {
    return NextResponse.json("Faill to fetch products");
  }
}


export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get("id")
     
        await Products.findByIdAndDelete(id)
        return NextResponse.json("succesfully deleted")
    } catch (error) {
        return NextResponse.json("unable to delete")
    }
}