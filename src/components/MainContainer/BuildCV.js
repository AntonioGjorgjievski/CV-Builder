import React, { useState, useContext } from "react";
import "./BuildCV.css";
import Linkedin from "../Linkedin/Linkedin";
import WeAreLaika from "../Wearelaika/Wearelaika";
import Footer from "../Footer/Footer";
import Helper from "../HelperForCorausel/Helper";
import HelperCv from "../CvHelper/HelperCv";
import WebCV from "../CvGuide/WebCV";
import WebEditCv from "../CvEditableComponents/WebEditCv";
import DataCv from "../CvGuide/DataCv";
import { CvContext } from "../../Context/ContextProvider";
import DataEditedCv from "../CvEditableComponents/DataEditedCv";
import MarketingCv from "../CvGuide/MarketingCv";
import MarketingEditedCv from "../CvEditableComponents/MarketingEditedCv";
import DesignEditedCv from "../CvEditableComponents/DesignEditedCv";

import DesignCv from "../CvGuide/DesignCv";

function BuildCV({ title }) {
  const { clickedCategory } = useContext(CvContext);
  const [cvBtn, setCvBtn] = useState(true);
  const [linkBtn, setLinkBtn] = useState(false);
  const [tip, setTip] = useState("");

  const [laikaBtn, setLaikaBtn] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const mouseEnter = (e) => {
    setIsShown(true);
    setTip(e.currentTarget.attributes.getNamedItem("data-tips").value);
  };
  const mouseLeave = () => {
    setIsShown(false);
  };

  const onCvClick = (e) => {
    setCvBtn(true);
    setLinkBtn(false);
    setLaikaBtn(false);
  };
  const onLinkedinClick = () => {
    setLinkBtn(true);
    setCvBtn(false);
    setLaikaBtn(false);
  };
  const onLaikaClick = () => {
    setLaikaBtn(true);
    setLinkBtn(false);
    setCvBtn(false);
  };
  const onEditBtn = () => {
    setEditBtn(!editBtn);
  };
  var cvType;
  if (clickedCategory === "Web Development" && cvBtn === true) {
    cvType = <WebCV></WebCV>;
    if (editBtn) {
      cvType = <WebEditCv></WebEditCv>;
    }
  } else if (clickedCategory === "Data Science" && cvBtn === true) {
    cvType = <DataCv></DataCv>;
    if (editBtn) {
      cvType = <DataEditedCv clickedCategory={clickedCategory}></DataEditedCv>;
    }
  } else if (clickedCategory === "Digital Marketing" && cvBtn === true) {
    cvType = <MarketingCv></MarketingCv>;
    if (editBtn) {
      cvType = <MarketingEditedCv></MarketingEditedCv>;
    }
  } else if (clickedCategory === "Design" && cvBtn === true) {
    cvType = <DesignCv></DesignCv>;
    if (editBtn) {
      cvType = <DesignEditedCv></DesignEditedCv>;
    }
  }

  return (
    <div className="build-background">
      <div className="build-title">
        <h1>{title}</h1>
      </div>
      <div className="cv-btns">
        <button className={cvBtn === true ? "active" : ""} onClick={onCvClick}>
          CV
        </button>
        <button
          className={linkBtn === true ? "active" : ""}
          onClick={onLinkedinClick}
        >
          LINKEDIN
        </button>
        <button
          className={laikaBtn === true ? "active" : ""}
          onClick={onLaikaClick}
        >
          WEARELAIKA.COM
        </button>
        {cvBtn && (
          <button
            onClick={onEditBtn}
            className={editBtn === true ? "act editBtn" : "editBtn"}
          >
            EDIT
          </button>
        )}
      </div>
      <div
        className={
          cvBtn === true ? "build-container" : "build-container corausel-mt"
        }
      >
        {cvType}
        {linkBtn && (
          <Linkedin
            mouseEnter={mouseEnter}
            mouseLeave={mouseLeave}
            link={linkBtn}
          />
        )}
        {laikaBtn && (
          <WeAreLaika mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        )}
        {cvBtn === true ? (
          <HelperCv />
        ) : (
          <Helper
            tip={tip}
            isShown={isShown}
            clickedCategory={clickedCategory}
            details={
              cvBtn === true
                ? ""
                : "Move your mouse over different parts of the image to get instructions about that specific section"
            }
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default BuildCV;
