// todo: footer section
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <FaGithubSquare />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaSquareXTwitter />
      </a>
      <a href="#">
        <FaLinkedin />
      </a>
      <a href="#">
        <FaFacebookSquare />
      </a>
    </div>
  );
}

export default Footer;
