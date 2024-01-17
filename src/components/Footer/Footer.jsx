import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Footer.css";
import { useLocation } from "react-router-dom";

export const Footer = ({ name, address, address2, email, phone }) => {
  const searchState = useSelector((state) => state.searchState);
  const noOfResults = searchState.searchResults.length;

  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div
      className={
        noOfResults < 1 || location.pathname != "/"
          ? "footer-container"
          : "footer-executed-container"
      }
    >
      <div className="content-container">
        <h5 className="name-container">{name}</h5>
        <div className="address-container">
          <p>{address}</p>
          <p>{address2}</p>
        </div>
        <div className="contact-container">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
      <div>
        <a></a>
      </div>
      <div className="content2-container">
        <a href="https://www.linkedin.com/in/sumit-sunchu-6ab69b24b/">
          <FaLinkedin className="icon linkedin"></FaLinkedin>
        </a>
        <a href="https://www.instagram.com/sumittt24?igsh=NTc4MTIwNjQ2YQ==">
          <FaInstagram className="icon instagram"></FaInstagram>
        </a>
        <a href="https://www.facebook.com/Mightyfox10">
          <FaFacebook className="icon facebook"></FaFacebook>
        </a>
      </div>
    </div>
  );
};
