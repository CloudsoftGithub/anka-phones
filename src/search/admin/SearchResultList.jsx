import React from "react";
import Link from "next/link";
import RemoveButton from "@/components/RemoveButton";

export default function SearchResultList({ results }) {
  return (
    <section id="adminedit" className="section-bg ">
      <div className="container">
       
        <div class="section-title ">
          <p>Anka Phones</p>
         
          <hr className="mb-2 mt-2" />
          <Link href="/adminview" className="text-decoration-none"></Link>
         
          
        </div>
        <div className="row  mb-4 justify-content-center align-items-center">
        {results.map((pro) => {
          return (
          
              <div className="col-6 col-lg-4 col-xl-3" key={pro.id}>
                <div className="card h-100 mb-3">
                  <img src={pro.image} className="card-img" alt="product image"/>
                  <div className="card-body">
                    <h5 className="card-subtitle">{pro.name}</h5>
                    <div className="d-flex mt-3 flex-row justify-content-between">
                    <div>
                      <p className="card-text ">
                        <span>Price:</span> {pro.price}
                      </p>
                    </div>
                    <div className="d-flex gx-2 justify-content-between align-content-between">
                        <Link href="" className="btn card-edit">
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
