import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Footer.css";
import { useLocation } from "react-router-dom";

export const Footer = ({ name, address, address2, email, phone }) => {
  const { searchResults } = useSelector((state) => state.searchState);
  const location = useLocation();

  let footerClass = "footer-container";

  if (location.pathname === "/create" || location.pathname === "/delete") {
    footerClass += " static";
  } else if (location.pathname === "/" && searchResults.length > 0) {
    footerClass += " floated";
  }

  return (
    <footer className={footerClass}>
      <div className="footer-content">
        <div className="footer-left">
          <h5 className="footer-name">{name}</h5>
          <p>{address}</p>
          <p>{address2}</p>
        </div>
        <div className="footer-center">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/sumit-sunchu-6ab69b24b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
          <a
            href="https://www.instagram.com/sumittt24?igsh=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon instagram" />
          </a>
          <a
            href="https://www.facebook.com/Mightyfox10"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="icon facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
};
