import { forwardRef } from "react";
import "./index.css";
import line from "../../assets/svgs/line.svg";
import arrowright from "../../assets/svgs/arrow-right.svg";
import articleSectionData from "./articleSection.json";

const ArticleSection = forwardRef((props, ref) => {
  return (
    <>
      <div className="bg-content">
        <div id="article-section-wrapper" ref={ref}>
          {articleSectionData.map((item, index) => (
            <div
              key={index}
              className="article-section-container "
              id={`article-${index + 1}`}
            >
              <div
                className={`box-wrapper ${index % 2 !== 0 ? "reverse" : ""}`}
              >
                <div className="article-box">
                  <div className="number-series-section">
                    <img
                      src={item.numbertext}
                      className="number-text"
                      alt="number"
                    />
                  </div>

                  <div className="article-description">
                    <div className="article-header-box">
                      <div className="line">
                        <img src={line} alt="line" />
                      </div>
                      <div className="article-header">GET Started</div>
                    </div>
                    <div className="article-subheader">
                      {item.articleSubheader}
                    </div>
                    <div className="article-details">{item.articleDetails}</div>
                    <div className="article-read-more">
                      <div className="read-more-text">read more</div>
                      <img
                        className="arrow-icon"
                        src={arrowright}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="article-img"
                    src={item.articleImg}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default ArticleSection;
