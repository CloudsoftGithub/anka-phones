import Link from "next/link";
export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md shadow-sm py-1"
        data-aos="fade-down"
        data-aos-delay="5000"
      >
        <div className="container">
        <Link
                href="/imgs/logo.jpg"
                data-lightbox="about-image"
                data-title="Brand Logo"
                className="glightbox mb-0"
              >
          <img src="/imgs/logo.jpg" className=" rounded-2" width={30} height={30} alt="" />
          </Link>
          <a href="/" className="navbar-brand fw-bolder text-uppercase">
            ANKA PHONES
          </a>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link fw-bold">
                <i className="bi bi-house-fill me-1"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/allproducts" className="nav-link fw-bold">
                <i className="bi bi-grid-fill me-1"> </i>
                  All Product
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link fw-bold">
                <i className="bi bi-slack me-1"></i>
                  About Us
                </a>
              </li>
             
              <li className="nav-item">
                <a href="/contact" className="nav-link fw-bold">
                <i className="bi bi-person-fill me-1"> </i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
