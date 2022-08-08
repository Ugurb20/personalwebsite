import React from "react";
import "./hamburger.css";

export default function HamburgerIcon(props) {
  return (
    <svg
      className="hamburger-icon"
      width="36"
      height="20"
      viewBox="0 0 36 20"
      fill={props.fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.6"
        y1="2.4"
        x2="33.6"
        y2="2.4"
        stroke={props.fillColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <line
        x1="1.6"
        y1="10.4"
        x2="33.6"
        y2="10.4"
        stroke={props.fillColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <line
        x1="1.6"
        y1="18.4"
        x2="33.6"
        y2="18.4"
        stroke={props.fillColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
