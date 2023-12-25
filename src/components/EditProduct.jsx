"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ViewCom from "./ViewCom";

export default function EditProduct({ id, name, price, description, imgUrl }) {
  const router = useRouter();

  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newDescription, setNewDescription] = useState(description);
  const [newPhoto, setNewPhoto] = useState(imgUrl);

  const CLOUD_NAME = "djkeyh3y0";
  const UPLOAD_PRESET = "csc_course";


  async function handleSubmit(e) {
    e.preventDefault();

    const newImgUrl = await udateImage();
    
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newName, newPrice, newDescription, newImgUrl }),
    });
    if (response.status == 200) {
      router.push("/adminview");
      router.refresh();
    }
    //console.log(newUser);
  }

  const udateImage = async () => {
    if (!newPhoto) return;

    const formData = new FormData();

    formData.append("file", newPhoto);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const newImgUrl = data["secure_url"];

      return newImgUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-bg" id="admin">
      <div className="container">
        <div class="section-title text-center">
          <p className="mb-2">Eit Product</p>
          <h2>Welcome Back</h2>
          <hr className="mb-0" />
        </div>

        <div className="row gy-3 justify-content-center align-items-center">
          <div className="col-12 col-lg-6 align-self-start ">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-subtitle mb-3">Editing Product</h5>

                <form className="g-2 " onSubmit={handleSubmit}>
                  <div className="col-md-12 ">
                    <label htmlFor="name" className="form-label">
                      Product Name
                    </label>

                    <input
                      type="text"
                      className="form-control shadow-sm"
                      onChange={(e) => setNewName(e.target.value)}
                      value={newName}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control  shadow-sm"
                      onChange={(e) => setNewPrice(e.target.value)}
                      value={newPrice}
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control  shadow-sm"
                      id="description"
                      rows="3"
                      onChange={(e) => setNewDescription(e.target.value)}
                      value={newDescription}
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="image" className="form-label">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      className="form-control  shadow-sm"
                      onChange={(e) => setNewPhoto(e.target.files[0])}
                    />
                  </div>
                  
                  <div className="d-flex align-self-end justify-content-end text-end">
                    <button type="submit" className="btn btn-submit my-2 ">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 align-self-center justify-content-end">
            <ViewCom />
          </div>
        </div>
      </div>
    </section>
  );
}
