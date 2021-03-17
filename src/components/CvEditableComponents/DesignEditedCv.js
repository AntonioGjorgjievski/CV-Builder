import React, { useContext } from "react";
import WebAboutCv from "../CvBuildingComponents/WebAboutCv";
import { CvContext } from "../../Context/ContextProvider";
import TextareaAutosize from "react-textarea-autosize";
import CvWorkExperiences from "../CvBuildingComponents/CvWorkExperiences";
import CvEducations from "../CvBuildingComponents/CvEducations";
import DataSkills from "../CvBuildingComponents/DataSkills";
import WebContactsCv from "../CvBuildingComponents/WebContactsCv";
import ReactTooltip from "react-tooltip";
import PdfModal from "../ModalForDownload/PdfModal";
import { Link } from "react-router-dom";
const DesignEditedCv = () => {
  const {
    about,
    updateAboutInput,
    clickedCategory,
    mouseTipsClick,
    handleDownload,
    isWeAreLaikaChecked,
    isLinkedInChecked,
  } = useContext(CvContext);
  return (
    <>
      <div className="cv-container">
        <div className="container" id="current-component">
          <div className="row mb-5">
            <div className="col-12 main-design-wrapper">
              <div className="row design">
                <div className="col-12 col-md-8 design-info d-flex align-items-end justify-content-center">
                  <div className="about">
                    <WebAboutCv></WebAboutCv>
                  </div>
                </div>
              </div>
              <div className="row about-design pb-5">
                <div className="col-12 col-md-8">
                  <TextareaAutosize
                    name="about"
                    className={
                      clickedCategory === "Design"
                        ? "editInputs tline-height about-designer-width"
                        : "editInputs line-height w-100"
                    }
                    value={about.about}
                    placeholder="About me"
                    onChange={(e) => {
                      updateAboutInput(e, about.id);
                    }}
                    type="text"
                    data-tips="about"
                    onClick={mouseTipsClick}
                  />
                </div>
              </div>
              <div className="row py-4">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div
                      className="col-12 pb-5"
                      data-tips="workExperience"
                      onClick={mouseTipsClick}
                    >
                      <CvWorkExperiences></CvWorkExperiences>
                    </div>
                    <WebContactsCv></WebContactsCv>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div
                      className="col-12 pb-2"
                      data-tips="education"
                      onClick={mouseTipsClick}
                    >
                      <CvEducations></CvEducations>
                    </div>
                    <div
                      className="col-12 pb-2"
                      data-tips="skills"
                      onClick={mouseTipsClick}
                    >
                      <DataSkills></DataSkills>
                    </div>
                  </div>
                </div>
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

export default DesignEditedCv;
