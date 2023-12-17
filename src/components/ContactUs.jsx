import Link from "next/link";
export default function ContactUs() {
  return (
    <>
      <section className="section-bg" id="contact">
        <div className="container">
          <div class="section-title text-center">
            <p>Contact Us</p>
            <hr className="mb-0" />
          </div>

          <div className="row gy-3 justify-content-center align-items-center">
            <div className="col-12 col-lg-6 align-self-start order-1 order-lg-0">
              <div className="card">
                <Link
                  href="/imgs/ak3.jpg"
                  data-lightbox="about-image"
                  data-title=" Location"
                  className="glightbox mb-0"
                >
                  <img src="/imgs/ak3.jpg" className="card-img" />
                </Link>
                <div className="card-body">
                  <h5 className="card-subtitle">Our Location</h5>

                  <div className="card mt-2 card-location px-4">
                    <h5 className="card-subtitle mt-2 ">
                      <i className="bi bi-house-fill text-dark me-2 rounded-5 border text-muted"></i>
                      Anka Phones
                    </h5>
                    <p className="ms-4">
                      Old Kasupda Building,
                      <br />
                      Ahmadu Bello Way, <br />
                      Kaduna.
                    </p>
                    <h5 className="card-subtitle mb-2">
                      <i className="bi bi-phone-fill text-dark me-2 rounded-5 border text-muted"></i>
                      Telephone
                    </h5>
                    <p className="ms-4">07062924932</p>
                    <h5 className="card-subtitle mb-2">
                      <i className="bi bi-clock-fill text-dark me-2 rounded-5 border text-muted"></i>
                      Opening Times
                    </h5>
                    <p className="ms-4">Mon-Saturday (8am - 6pm)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start order-0 order-lg-1">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-subtitle mb-3">Contact Form</h5>
                  <form className="g-2 ">
                    <div className="col-md-12 ">
                      <label htmlFor="code" className="form-label">
                        Full Name:
                      </label>

                      <input
                        type="text"
                        className="form-control shadow-sm"
                        id="name"
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="title" className="form-label">
                        E-Mail Address
                      </label>
                      <input
                        type="title"
                        className="form-control  shadow-sm"
                        id="email"
                      />
                    </div>

                    <div className="mb-1">
                      <label htmlFor="enquiry" className="form-label">
                        Enquiry
                      </label>
                      <textarea
                        className="form-control  shadow-sm"
                        id="enquiry"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="d-flex align-self-end justify-content-end text-end">
                      <button
                        type="submit"
                        className="btn btn-submit my-2 "
                      >
                       SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
