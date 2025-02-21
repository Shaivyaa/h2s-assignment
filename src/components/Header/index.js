import React, { useEffect, useState } from "react";
import "./index.css";
import logo from "../../assets/svgs/logo.svg";
import accountProfileIcon from "../../assets/svgs/account-profile-icon.svg";
import { motion } from "framer-motion";

export default function Header() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "#1b4965",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#5fa8d3",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div className="header-wrapper">
        <div className="header-container ">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="navitem-container">
            <div
              className="nav-item "
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Equipment
            </div>
            <div
              className="nav-item "
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              About Us
            </div>
            <div
              className="nav-item "
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Blog
            </div>
          </div>
          <div className="account-container">
            <div className="account-profile-icon-container">
              <img src={accountProfileIcon} alt="account-profile" />
            </div>
            <div className="account-profile-name">Account</div>
          </div>
        </div>
      </div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
}
