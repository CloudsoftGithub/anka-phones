import React from "react";

export default function LandingPage() {
  return (
    <section className="shadow-sm w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className=" container hero">
        <div className="row justify-content-center align-content-center ">
          <div className="col-lg-6 col-md-6 col-12 text-lg-start text-center">
            <h1 data-aos="fade-up">
              Welcome to HHY Online Store where we sale materials at affordable
              price.
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Thank You as you business with us
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div class="text-center text-lg-start">
                <a
                  href="#AllNewProducts"
                  class="btn-get-started mb-4  d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 text-lg-start">
            <img
              data-aos="zoom-out"
              data-aos-delay="200"
              src="/ankaImgs/ankaOne.jpg"
              alt="hero img"
              className=" img-fluid rounded-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
