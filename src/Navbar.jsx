import "./Navbar.css";
import Logo from "./assets/logo.jpg";

function Navbar() {
  return (
    <>
      <nav style={{ fontFamily: 'Poppins, sans-serif' }} className="sticky-top mt-2 bg-nav d-flex px-5 justify-content-between align-items-center nav-height">
        <div className="d-flex gap-2">
          <a href="/Navbar">
          <img src={Logo} alt="" />
          </a>
          <h1 className="fs-3 fw-bold">Typemaster</h1>
        </div>
        <div>
          <ul className="d-flex gap-list list-unstyled align-items-center">
            <li><a href="#" className="no-underline text-black hover-underline">Home</a></li>
            <li><a href="#" className="no-underline text-black hover-underline">About</a></li>
            <li><a href="#" className="no-underline text-black hover-underline">Products</a></li>
            <li><a href="#" className="no-underline text-black hover-underline">Contact</a></li>
            <li>
              <button className="btn-hero">
                <a href="" className="no-underline text-white ">Login</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;