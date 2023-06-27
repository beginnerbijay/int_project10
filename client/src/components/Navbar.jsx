import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  return (
    <nav className="navbar navbar-expand-lg text-bg-primary" data-bs-theme="dark">
  <div className="container-fluid mx-5">
    <Link to={'/'} className="navbar-brand text-white" data-bs-toggle="tooltip" data-bs-title="A Virtual Stock of Items">SampleCURD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/new'}><button className="btn btn-outline-light">
            <b>Add Item</b>
          </button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar