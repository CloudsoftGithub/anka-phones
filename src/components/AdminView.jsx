import getAll from "@/product-fetch/getAll";
import Link from "next/link";
import RemoveButton from "./RemoveButton";

export default async function AdminView() {
  const prod = await getAll();
  return (
    <section id="adminedit" className="section-bg ">
      <div className="container">
        <Link className="btn border-0  back  shadow btn-sm mx-1" href="/create">
          <i className="bi bi-arrow-left mx-1"> </i>
        </Link>
        <div class="section-title text-center">
          <p className="py-2">Anka Phones</p>
          <h2 className="mb-2">You can Edit and delete here!</h2>
          <hr className="mb-2 mt-2" />
          <Link href="/allproducts" className="text-decoration-none"></Link>
          <Link
            href="/adminSearch"
            className=" text-decoration-none justify-content-start d-flex"
          >
            <input
              type="text"
              className="shadow border-0 p-2 rounded-2  position col-12 col-md-4"
              placeholder="Search for your product"
            />
          </Link>
        </div>
        <div className="row  mb-4 justify-content-center align-items-center">
        {prod.map((pro) => {
          return (
            
              <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={pro.id}>
                <div className="card h-75 mb-5">
                  <img src={pro.imgUrl} className="card-img" alt="product image"/>
                  <div className="card-body">
                    <h5 className="card-subtitle ">{pro.name}</h5>
                    <div>
                      <p className="card-text ">
                        <span>Price:</span> {pro.price}
                      </p>

                      <div className="d-flex gx-2 justify-content-between align-content-between">
                        <Link href={`/edit-product/${pro._id}`} className="btn card-edit">
                          <i className="bi bi-pencil me-2"></i>EDIT
                        </Link>
                        <RemoveButton id={pro._id} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          );
        })}
        </div>
      </div>
    </section>
  );
}
