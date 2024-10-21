import logo from "./assets/logo.jpg";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css"
function Footer() {
    return ( 
        <footer className="bg-footer d-flex justify-content-between px-5 align-items-center text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
           <div className="d-flex gap-3 align-items-center">
            <a href="/Navbar">
            <img src={logo} alt="" className="logo-footer"/>
            </a>
            <h1 className="fw-bold fs-4">Typemaster</h1>
           </div>
           <div>
            <p className="fw-bold">Copyright © Ivriel Gunawan.2024</p>
               <div className="gap-4 d-flex justify-content-center">
                  <a href="https://www.instagram.com/wynsc_u13/" className="text-white" target="_blank">
                  <FaSquareInstagram className="icons-footer"/>
                  </a>
                  <a href="https://github.com/Ivriel" className="text-white" target="_blank">
                  <FaGithub className="icons-footer"/>
                  </a>
                  <a href="https://www.youtube.com/@IvrielGunawan" className="text-white" target="_blank">
                  <FaYoutube className="icons-footer"/>
                  </a>
               </div>
           </div>
        </footer>
     );
}

export default Footer;