
import Products from "@/model/products";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const user = await Products.findOne({ _id: id });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    //Get the data from the request
    const {
      newName: name,
      newPrice: price,
      newDescription: description,
      newImgUrl: imgUrl,
    } = await request.json();
    const newUser = {
      name,
      price,
      description,
      imgUrl,
    };
    //Use the Model to update
    await Products.findByIdAndUpdate(id, newUser);
    return NextResponse.json(
      {
        message: "User Updated successfully",
        data: newUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
