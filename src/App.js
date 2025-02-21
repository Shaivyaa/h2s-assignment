import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="section-component">
        <Header />
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}
