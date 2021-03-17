import React, { useRef, useEffect } from "react";
import "./Popup.css";
import { Link } from "react-router-dom";
import { TweenMax, Power3, Expo } from "gsap";
import CreatedBy from "../FooterHome/CreatedBy";
function Popup() {
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
    TweenMax.staggerFrom(img, 7, {
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
      <div className="popup-grid">
        <div className="popup-info">
          <h1
            ref={(el) => {
              title = el;
            }}
          >
            Did you finish all
            <br />
            three? Way to go!
          </h1>
          <p
            ref={(el) => {
              para = el;
            }}
          >
            Good luck on your next job if <br />
            you need help, counseling or
            <br />
            just want to leave a suggestion, <br />
            contact us at <br />
            <span className="wearelaika-mail">hello@wearelaika.com.</span>
          </p>
          <Link to="/">
            <button
              ref={(el) => {
                btn = el;
              }}
              className="back-to-home-button"
            >
              Back to home
            </button>
          </Link>
        </div>
        <div
          className="popup-img"
          ref={(el) => {
            img = el;
          }}
        ></div>
      </div>
      <CreatedBy />
    </div>
  );
}

export default Popup;
