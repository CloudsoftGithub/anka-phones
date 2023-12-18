import Link from "next/link";
import LandingFooter from "./LandingFooter";

export default function AboutUs() {
  return (
    <section
      className="section-bg"
      id="about"
    >
      <div className="container">
        <div class="section-title text-center">
          <p>About Us</p>
          <hr className="mb-0" />
        </div>

        <div className="row gy-3 justify-content-center align-items-center">
          <div className="col-12 col-lg-6 align-self-start order-1">
            <div className="card">
              <Link
                href="/imgs/ak10.jpg"
                data-lightbox="about-image"
                data-title=" Location"
                className="glightbox mb-0"
              >
                <img src="/imgs/ak10.jpg" className="card-img" />
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
          <div className="col-12 col-lg-6 align-self-start order-0">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-subtitle mb-3">ANKA PHONES</h5>
                <p className="card-text ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus vel aperiam officiis minima perferendis quam ab,
                  culpa libero eum molestias exercitationem esse blanditiis unde
                  quos maxime consequatur nesciunt illum sit eaque aliquam.
                  Officia, esse minima eaque doloremque facere a quia autem
                  harum eveniet quis nulla alias repudiandae qui. Delectus,
                  architecto.
                </p>
                <p className="card-text ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus vel aperiam officiis minima perferendis quam ab,
                  culpa libero eum molestias exercitationem esse blanditiis unde
                  quos maxime consequatur nesciunt illum sit eaque aliquam.
                </p>
                <p className="card-text ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus vel aperiam officiis minima perferendis quam ab,
                  culpa libero eum molestias exercitationem esse blanditiis unde
                  quos maxime consequatur nesciunt illum sit eaque aliquam.
                  Officia, esse minima eaque doloremque facere a quia autem
                  harum eveniet quis nulla alias repudiandae qui. Delectus,
                  architecto. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Assumenda labore in eligendi illo possimus vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
      <LandingFooter/></div>
    </section>
  );
}
