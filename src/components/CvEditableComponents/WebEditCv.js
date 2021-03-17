import React, { useContext } from "react";
import WebAboutCv from "../CvBuildingComponents/WebAboutCv";
import CvImg from "../CvBuildingComponents/CvImg";
import WebContactsCv from "../CvBuildingComponents/WebContactsCv";
import WebSkillsCv from "../CvBuildingComponents/WebSkillsCv";
import CvWorkExperiences from "../CvBuildingComponents/CvWorkExperiences";
import CvEducations from "../CvBuildingComponents/CvEducations";
import CvAchievements from "../CvBuildingComponents/CvAchievements";
import CvLanguages from "../CvBuildingComponents/CvLanguages";
import PdfModal from "../ModalForDownload/PdfModal";
import ReactTooltip from "react-tooltip";
import { CvContext } from "../../Context/ContextProvider";
import { Link } from "react-router-dom";


const WebEditCv = () => {
  const {
    mouseTipsClick,
    handleDownload,
    isWeAreLaikaChecked,
    isLinkedInChecked,
  } = useContext(CvContext);

  return (
    <>
      <div className="cv-container">
        <div className="container" id="current-component">
          <div className="row mb-3 cv-header pb-4">
            <div className="col-12 order-1 order-md-0 col-md-5">
              <div className="row">
                <div className="col-1 px-0">
                  <div className="dark-squere"></div>
                </div>
                <div className="col-11">
                  <WebAboutCv></WebAboutCv>
                </div>
              </div>
            </div>
            <CvImg></CvImg>
            <WebContactsCv></WebContactsCv>
          </div>
          <div className="row py-3">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12">
                  <div
                    className="row"
                    data-tips="workExperience"
                    onClick={mouseTipsClick}
                  >
                    <CvWorkExperiences></CvWorkExperiences>
                  </div>
                  <div
                    className="row py-3"
                    data-tips="education"
                    onClick={mouseTipsClick}
                  >
                    <CvEducations></CvEducations>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <WebSkillsCv></WebSkillsCv>
              <div className="row py-4">
                <CvAchievements></CvAchievements>
              </div>
              <div
                className="row pb-3"
                data-tips="language"
                onClick={mouseTipsClick}
              >
                <CvLanguages></CvLanguages>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row py-4">
            <div className="col text-right">
              <Link
                to={isLinkedInChecked && isWeAreLaikaChecked ? "/popup" : "#"}
                onClick={() =>
                  handleDownload(document.getElementById("current-component"))
                }
                className="btn btn-edit btn-download text-uppercase"
              >
                <button
                  data-for="downloadBtn"
                  data-tip="React-tooltip"
                  className="downloadBtn"
                >
                  DOWNLOAD
                </button>
              </Link>
              <div className="customTooltip">
                <ReactTooltip
                  id="downloadBtn"
                  place="top"
                  data-background-color="blue"
                  effect="solid"
                >
                  <p>
                    Check Linkedin and WeareLaika.com fields before downloading
                    the CV
                  </p>
                </ReactTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PdfModal></PdfModal>
    </>
  );
};

export default WebEditCv;
