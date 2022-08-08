import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import "./headerrow.css";

export default function HeaderRow() {
  return (
    <div className="container header-container" id="about">
      <h1>Hi, I'm Ugur Bukcuoglu.</h1>
      <p>
        {" "}
        I am a student at Istanbul Technical University who is passionate about
        web devolopment and design. Below you can find some information and the
        link to the actual sites.
      </p>
      <div className="header-icon-container">
        <FaHtml5 />
        <FaCss3Alt />
        <FaReact className="react-logo" />
        <FaNode />
        <FaBootstrap />
      </div>
    </div>
  );
}
