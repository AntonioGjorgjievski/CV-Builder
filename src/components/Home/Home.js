import React, { useRef, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { TweenMax, Power3, Expo } from "gsap";
import HomeImg from "../../images/backgrounds/BackgroundFirstPage.png";
import CreatedBy from "../FooterHome/CreatedBy";
function HomePage() {
  let title = useRef(null);
  let img = useRef(null);
  let para = useRef(null);
  let btn = useRef(null);
  useEffect(() => {
    TweenMax.staggerFrom(title, 3, {
      opacity: 0,
      x: -800,
      ease: Expo.easeOut,
    });
    TweenMax.staggerFrom(img, 3, {
      delay: 1,
      opacity: 0,
      width: 100,
      ease: Power3.easeOut,
    });
    TweenMax.staggerFrom(para, 9, {
      delay: 1.1,
      opacity: 0,
      ease: Power3.easeOut,
    });
    TweenMax.staggerFrom(btn, 4, {
      delay: 2.5,
      opacity: 0,
      y: 200,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className="home-background">
      <div className="home-grid">
        <div className="home-info">
          <h1
            ref={(el) => {
              title = el;
            }}
          >
            The Ultimate <br />
            CV & Portfolio Check - List
          </h1>
          <p
            ref={(el) => {
              para = el;
            }}
          >
            Are you a Web Developer. Data Scientist, Digital Marketer or a
            Designer? <br />
            Have your CV and portfolio in check and create a 5-star
            representation <br />
            of your skils with guide
          </p>
          <Link to="/category">
            <button
              ref={(el) => {
                btn = el;
              }}
              className="home-button"
            >
              Step inside
            </button>
          </Link>
        </div>
        <div className="home-img">
          <img
            ref={(el) => {
              img = el;
            }}
            src={HomeImg}
            alt=""
          />
        </div>
      </div>
      <CreatedBy />
    </div>
  );
}

export default HomePage;
