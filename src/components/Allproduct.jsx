import getAll from "@/product-fetch/getAll";
import Link from "next/link";
export default async function Allproduct() {
  const prod = await getAll();
  return (
    <>
      <section id="allproduct" className="section-bg ">
        <div className="container">
          <div class="section-title text-center">
            <p className="py-2">Anka Phones</p>
            <h2 className="py-1">All Products</h2>
            <hr className="mb-0" />
            <div className="shadow-none mb-1 py-2">
              <Link
                href="/generalSearch"
                className=" text-decoration-none justify-content-start d-flex"
              >
                <input
                  type="text"
                  className="shadow border-0 p-2 rounded-2  position col-12 col-md-4"
                  placeholder="Search for your product"
                />
              </Link>
            </div>
          </div>
          <div className="row  mb-4 align-items-center" id="allprod">
            {prod.map((pro) => {
              return (
                <div className="col-12  col-md-6 col-lg-4 col-xl-3" key={pro.id}>
                  <div className="card h-75 mb-5">
                    <img src={pro.imgUrl} className="card-img" alt="product image"/>
                    <div className="card-body">
                      <h5 className="card-subtitle text-truncate">{pro.name}</h5>

                      <div className="d-flex mt-3 flex-row justify-content-between">
                        <div>
                          <p className="card-text ">
                            <span>Price:</span> {pro.price}
                          </p>
                        </div>
                        <div>
                          <Link
                            href={`/details/${pro._id}`}
                            className="btn card-btn"
                          >
                            <i className="bi bi-check me-2"></i>Details
                          </Link>
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
    </>
  );
}
