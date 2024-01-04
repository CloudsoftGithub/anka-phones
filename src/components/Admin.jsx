"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ViewCom from "./ViewCom";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const CLOUD_NAME = "djkeyh3y0";
  const UPLOAD_PRESET = "csc_course";

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !price || !description || !photo) {
      alert("All fields are needede!!!");
      return;
    }
    const imgUrl = await uploadImage();
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, description, imgUrl }),
    });
    if (response.status == 200) {
      router.refresh();
      router.push("/adminview");
    }
  }

  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append("file", photo);
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

      const imgUrl = data["secure_url"];

      return imgUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-bg" id="admin">
      <div className="container">
        <div class="section-title text-center">
          <p className="mb-2">Add Product</p>
          <h2>Welcome Back</h2>
          <hr className="mb-0" />
        </div>

        <div className="row gy-3 justify-content-center align-items-center">
          <div className="col-12 col-lg-6 align-self-start ">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-subtitle mb-3">Adding Product</h5>
                <form className="g-2 " onSubmit={handleSubmit}>
                  <div className="col-md-12 ">
                    <label htmlFor="name" className="form-label">
                      Product Name
                    </label>

                    <input
                      type="text"
                      className="form-control shadow-sm"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control  shadow-sm"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
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
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="image" className="form-label">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      className="form-control  shadow-sm"
                      onChange={(e) => setPhoto(e.target.files[0])}
                    />
                  </div>
                  <div className="col-md-12 mt-2 mb-0">
                    {photo && (
                      <img
                        className="add-photo"
                        src={URL.createObjectURL(photo)}
                        alt=""
                      />
                    )}
                  </div>

                  <div className="d-flex align-self-end justify-content-end text-end">
                    <button type="submit" className="btn btn-submit my- ">
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
