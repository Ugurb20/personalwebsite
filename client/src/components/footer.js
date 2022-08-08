import { FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="footer-container-column1">
        <div className="column1-row1">
          <h1>
            <a href="mailto:ugurbukcuoglu@gmail.com?" type="email">
              Email
            </a>
          </h1>
        </div>
        <div className="column1-row2">
          <h1>
            <a
              href="https://www.linkedin.com/in/u%C4%9Fur-b%C3%BCk%C3%A7%C3%BCo%C4%9Flu-b718a022b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </h1>
        </div>
      </div>
      <div className="footer-container-column2">
        <div className="footer-icons-container">
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}
