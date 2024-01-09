import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export const Footer = ({ name, address, address2, email, noOfPages }) => {
  return (
    <div
      className={
        noOfPages > 0 ? "footer-executed-container" : "footer-container"
      }
    >
      <div className="content-container">
        <h5 className="name-container">{name}</h5>
        <p>{address}</p>
        <p>{address2}</p>
        <p>{email}</p>
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
