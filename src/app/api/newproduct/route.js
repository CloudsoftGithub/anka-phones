import products from "@/models/products";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        
        const prt = await products.find({}, null,{
            sort: { _id: -1 },
            limit: 12,
        });
        return NextResponse.json(prt);

    } catch (error) {
        return NextResponse.json("fail to populate data")

    }
}