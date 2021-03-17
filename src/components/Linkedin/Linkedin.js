import React, { useEffect, useContext } from "react";
import "./Linkedin.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CvContext } from "../../Context/ContextProvider";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Img1 from "../../images/LinkedIn screenshots/bill1.png";
import Img2 from "../../images/LinkedIn screenshots/bill2.png";
import Img3 from "../../images/LinkedIn screenshots/bill3.png";
import Img4 from "../../images/LinkedIn screenshots/bill4.png";
function Linkedin({ mouseEnter, mouseLeave }) {
  const { handleLinkedIn } = useContext(CvContext);

  useEffect(() => {
    handleLinkedIn(true);
  }, []);

  return (
    <div className="linkedin-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={90}
        totalSlides={4}
      >
        <Slider>
          <Slide index={0}>
            <img src={Img1} alt="" />
            <div
              data-tips="link1"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className="linkein-slide"
            ></div>
          </Slide>
          <Slide index={1}>
            <img src={Img2} alt="" />
            <div
              data-tips="link2"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className="linkein-slide"
            ></div>
          </Slide>
          <Slide index={2}>
            <img src={Img3} alt="" />
            <div
              data-tips="link3"
              className="up"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
            <div
              data-tips="link4"
              className="down"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
          </Slide>
          <Slide index={3}>
            <img src={Img4} alt="" />
            <div
              data-tips="link5"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className="linkein-slide"
            ></div>
          </Slide>
        </Slider>
        <ButtonBack className="backBtn">
          <ArrowBackIcon style={{ fontSize: "40px" }} />
        </ButtonBack>
        <ButtonNext className="nextBtn">
          <ArrowForwardIcon style={{ fontSize: "40px" }} />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default Linkedin;
