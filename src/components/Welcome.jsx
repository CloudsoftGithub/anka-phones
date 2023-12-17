import Image from "next/image";
import Link from "next/link";
export default function Welcome() {
  return (
    <>
      <header className="parallax-header">
        <div className="container ">
          <div
            className="header-content"
            data-aos="zoom-out"
            data-aos-delay="400"
          >
           
          </div>
        </div>
      </header>
      <div className="container p-4">
        <div className="content row  text-center">
          <div
            className="col-12 left p-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="primary-color text-uppercase">
            Welcome to Anka Phones Store 
               <hr className="mt-0 mb-2" />
            </h1>
            <h4>
            where we sale <span className="instructor"> phones</span> at 
              <span className="student">  affordable</span> price.
            </h4>
            <div className="d-flex justify-content-center">
              <Link href="#newlyproduct" className="btn btn-code me-2">
               <i className=" bi bi-arrow-down-circle h1"></i>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
