import React, { useEffect, useContext } from "react";
import "./Wearelika.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Img1 from "../../images/Laika screenshots/laika1.png";
import Img2 from "../../images/Laika screenshots/laika2.png";
import Img3 from "../../images/Laika screenshots/laika3.png";
import Img4 from "../../images/Laika screenshots/laika4.png";
import Img5 from "../../images/Laika screenshots/laika5.png";
import { CvContext } from "../../Context/ContextProvider";
function WeAreLaika({ mouseEnter, mouseLeave, link }) {
  const { handleWeAreLaika } = useContext(CvContext);
  useEffect(() => {
    handleWeAreLaika(true);
  }, []);
  return (
    <div className="linkedin-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={90}
        totalSlides={5}
      >
        <Slider>
          <Slide index={0}>
            <img src={Img1} alt="" />
            <div
              data-tips="laika1"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className="linkein-slide"
            ></div>
          </Slide>
          <Slide index={1}>
            <img src={Img2} alt="" />
            <div
              data-tips="laika2"
              className="up"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
            <div
              data-tips="laika3"
              className="down"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
          </Slide>
          <Slide index={2}>
            <img src={Img3} alt="" />
            <div
              data-tips="laika4"
              className="up"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
            <div
              className="middle"
              data-tips="laika5"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
            <div
              data-tips="laika6"
              className="down"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
          </Slide>
          <Slide index={3}>
            <img src={Img4} alt="" />
            <div
              data-tips="laika7"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className="linkein-slide"
            ></div>
          </Slide>
          <Slide index={4}>
            <img src={Img5} alt="" />
            <div
              data-tips="laika8"
              className="up"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
            <div
              className="mid"
              data-tips="laika9"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            ></div>
            <div
              data-tips="laika10"
              className="down"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
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

export default WeAreLaika;
