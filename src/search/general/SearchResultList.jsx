
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SearchResultList({ results }) {
  return (
    <section id="generalsearch" className="section-bg ">
      <div className="container">
       
        <div class="section-title ">
          <p className="py-2">Anka Phones</p>
          <h2 className="mb-2">Search for your product</h2>
          <hr className="mb-2 mt-2" />
          <Link href="/allproducts" className="text-decoration-none"></Link>
          
        </div>
        <div className="row  mb-4 justify-content-center align-items-center">
        {results.map((pro) => {
          return (
          
              <div className="col-12  col-md-6 col-lg-4 col-xl-3" key={pro.id}>
                <div className="card h-75 mt-0 mb-5">
                  <img src={pro.image} className="card-img" alt="product image"/>
                  <div className="card-body">
                    <h5 className="card-subtitle text-truncate">{pro.name}</h5>
                    <div className="d-flex mt-3 flex-row justify-content-between">
                    <div>
                      <p className="card-text ">
                        <span>Price:</span> {pro.price}
                      </p>
                    </div>
                    <div>
                      <Link href={`/details/${pro._id}`} className="btn card-search">
                        <i className="bi bi-check"></i>Details
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
      <Footer/>
    </section>
  );
}
