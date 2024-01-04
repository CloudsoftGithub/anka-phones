import Footer from "@/components/Footer";
import getSingle from "@/product-fetch/getSingle";
import Link from "next/link";

export default async function Details({ params: { id } }) {
 const pro = await getSingle(id);
  return (
    <>
      <section className="section-bg" id="details">
        <div className="container">
          <Link
            className="btn border-0  back  shadow btn-sm mx-1"
            href="/allproducts"
          >
            <i className="bi bi-arrow-left mx-1"> </i>
          </Link>

          <div class="section-title text-center">
            <p> Product Details </p>
            <hr className="mb-0" />
          </div>

          <div className="row justify-content-start gy-2 ">
            <div className="col-12">
              <div className="card h-100">
                <div className="row d-flex flex-column flex-md-row">
                  <div className="col-12 col-md-5">
                    <Link
                      href={`${pro.image}`}
                      data-lightbox="about-image"
                      data-title=" product full image"
                      className="glightbox mb-0"
                    >
                      <img
                        src={pro.image}
                        className="card-img-top img-fluid"
                        alt="product image"
                      />
                    </Link>
                  </div>
                  <div className="col-12 col-md-7">
                    <div className="card-body d-flex flex-column">
                      <div className="h-100">
                        <h3 className="card-subtitle"> {pro.name}</h3>

                        <h6 className="card-title my-3 display-3">
                          Price: $ <strong>{pro.price}</strong>
                        </h6>
                        <p className="card-text">{pro.description}</p>

                        <Link href="/contact">
                          <button
                            type="submit"
                            className="btn btn-details  my-2 "
                          >
                            Contact Us
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
