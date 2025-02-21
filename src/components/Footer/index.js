import React from "react";
import "./index.css";
import logo from "../../assets/svgs/logo.svg";

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-start-container">
            <div className="footer-top">
              <img className="logo" src={logo} alt="logo" />
              <div className="footer-top-text">
                Get out there & discover your next slope, mountain &
                destination!
              </div>
            </div>
            <div className="footer-bottom">
              Copyright 2023 MNTN, Inc. Terms & Privacy
            </div>
          </div>
          <div className="footer-end-container">
            <div className="footer-details">
              <div className="footer-name">More on The Blog</div>
              <div className="footer-desc">About MNTN</div>
              <div className="footer-desc">Contributors & Writers</div>
              <div className="footer-desc">Write For Us</div>
              <div className="footer-desc">Contact Us</div>
              <div className="footer-desc">Privacy Policy</div>
            </div>

            <div className="footer-details">
              <div className="footer-name">More on MNTN</div>
              <div className="footer-desc">The Teams</div>
              <div className="footer-desc">Jobs</div>
              <div className="footer-desc">Press</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
