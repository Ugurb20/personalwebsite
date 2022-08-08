import "./nav.css";
import HamburgerIcon from "../icons/hamburger";
import LinkedinIcon from "../icons/linkedin";
import GithubIcon from "../icons/github";
import { useState, useEffect } from "react";

const PRIMARYCOLOR = "#3b2827";
const SECONDARYCOLOR = "#F4F1E0";
const BACKGROUNDPRIMARYCOLOR = "#f4f1e0";
const BACKGROUNDSECONDARYCOLOR = "#525252";

export default function Navbar() {
  const [modalState, setModalState] = useState(false);
  const [svgColor, setSvgColor] = useState(PRIMARYCOLOR);
  const [hamburgerIconState, setHamburgerIconState] = useState("rotate(0deg)");
  const [backgroundNav, setBackgroundNav] = useState(BACKGROUNDPRIMARYCOLOR);
  function openModal(e) {
    if (e) {
      e.preventDefault();
    }

    if (modalState) {
      setSvgColor(PRIMARYCOLOR);
      setBackgroundNav(BACKGROUNDPRIMARYCOLOR);
      setHamburgerIconState("rotate(0deg)");
      document.querySelector(".nav-modal").classList.remove("expand");
      document.querySelector(".modal-link-container").classList.add("hidden");
    } else {
      setSvgColor(SECONDARYCOLOR);
      setBackgroundNav(BACKGROUNDSECONDARYCOLOR);
      setHamburgerIconState("rotate(90deg)");
      document.querySelector(".nav-modal").classList.add("expand");
      document
        .querySelector(".modal-link-container")
        .classList.remove("hidden");
    }
    setModalState(!modalState);
  }
  useEffect(() => {
    const modalLinks = document.querySelectorAll(".modal-link");
    modalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
        const scrollTarget = e.target.innerHTML.toLowerCase();
        const section = document.querySelector(`#${scrollTarget}`);
        section.scrollIntoView({ behavior: "smooth" });
      });
    });
  });

  function handleModalScroll(e) {}
  return (
    <div
      className="navbar"
      style={{
        borderBottom: `${svgColor} 1px solid`,
        backgroundColor: backgroundNav,
      }}
    >
      <div className="nav-container">
        <a
          href="#"
          onClick={openModal}
          style={{
            transform: hamburgerIconState,
          }}
        >
          <HamburgerIcon fillColor={svgColor} />
        </a>
        <a
          href="https://www.linkedin.com/in/u%C4%9Fur-b%C3%BCk%C3%A7%C3%BCo%C4%9Flu-b718a022b/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon fillColor={svgColor} />
        </a>
        <a href="https://github.com/Ugurb20" target="_blank" rel="noreferrer">
          <GithubIcon fillColor={svgColor} />
        </a>
      </div>
    </div>
  );
}
