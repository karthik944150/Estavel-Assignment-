import { FaInstagram, FaYoutube, FaFacebook, FaTwitter
} from "react-icons/fa";

import { FaCopyright } from "react-icons/fa6";

import "./index.css" 

const Footer = () =>{
    return (
        <div className="footer-section">
            <h1>Contact Info</h1>
            <div className="icons">
                <a href = "https://www.facebook.com/StonePedia1/">
                    <FaFacebook size = {30} className="link-item"/>
                </a>
                <a href = "https://www.instagram.com/stonepedia.official/">
                    <FaInstagram size={30}  className="link-item"/>
                </a>
                <a href = "#">
                    <FaTwitter size = {30}  className="link-item"/>
                </a>
            </div>
            <div className="copy-right-section">
                <hr className="under-line"/>
                <p>Copyright © 2024 - StonePedia Private Limited. All Rights Reserved.</p>

            </div>
           

        </div>
    )
}

export default Footer