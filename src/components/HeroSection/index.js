import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./index.css";
import line from "../../assets/svgs/line.svg";
import arrowDown from "../../assets/svgs/arrow-down.svg";
import instagram from "../../assets/svgs/instagram.svg";
import twitter from "../../assets/svgs/twitter.svg";
import ArticleSection from "../ArticleSection";
import sliderline from "../../assets/svgs/slider-line.svg";

function HeroSection() {
  const textBlockRef = useRef(null);

  const handleScrollDown = () => {
    textBlockRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Parallax pages={2} style={{ left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax">
            <section className="description-container">
              <div className="social-media-container">
                <div className="top-text">Follow</div>
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
              </div>
              <div className="center-details">
                <div className="header-box">
                  <img src={line} className="line" alt="line" />
                  <div className="header-text">A Hiking Guide</div>
                </div>
                <div className="description-text">
                  Be prepared for the Mountains and beyond!
                </div>
                <div className="bottom-box" onClick={handleScrollDown}>
                  <div className="bottom-text">scroll down</div>
                  <img
                    src={arrowDown}
                    className="arrow-down"
                    alt="arrow-down"
                    width={16}
                    height={24}
                  />
                </div>
              </div>
              <div className="slider-box">
                <div className="number-text">
                  <div className="number-cursor">Start</div>
                  <div
                    className="number-cursor"
                    onClick={() => handleScrollToSection("article-1")}
                  >
                    01
                  </div>
                  <div
                    className="number-cursor"
                    onClick={() => handleScrollToSection("article-2")}
                  >
                    02
                  </div>
                  <div
                    className="number-cursor"
                    onClick={() => handleScrollToSection("article-3")}
                  >
                    03
                  </div>
                </div>
                <div className="slider-line">
                  <img src={sliderline} alt="slider-line" />
                </div>
              </div>
            </section>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <ArticleSection ref={textBlockRef} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HeroSection;
