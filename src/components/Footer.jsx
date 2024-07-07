import "../css/Footer.css";
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div>
          <a href="#"><FaYoutubeSquare /></a>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="/our_services">Our Services</a>
          <br />
          <a href="/about">About</a>
          <br />
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-social-links">
          <h3>Social Links</h3>
          <a href="#"><FaFacebookSquare /></a>
          <a href="#"><FaTwitterSquare /></a>
          <a href="#"><FaInstagramSquare /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutubeSquare /></a>
        </div>
      </div>

      <p>&copy; - 2024 Rana{"'"}s IT Services</p>
    </footer>
  )
}

export default Footer