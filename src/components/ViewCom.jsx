import Link from "next/link"

export default function ViewCom() {
  return (
    <div className="card">
    <div className="card-body text-center">
      <h5 className="card-subtitle text-truncate">View</h5>
      <Link href="/adminview" className="text-decoration-none">
        <div className="card mt-2 card-admin px-4">
          <h5 className="card-subtitle mb-2"></h5>
          <p className="ms-4"> View all product (edit/delete!)</p>

          <div className="d-flex align-items-center justify-content-between text-end">
            <i className="bi bi-pencil h3 text-dark me-2 rounded-5 border text-muted"></i>
            <button type="submit" className="btn btn-submit my-2 ">
              VIEW
            </button>
          </div>
        </div>
      </Link>
    </div>
  </div>
  )
}
