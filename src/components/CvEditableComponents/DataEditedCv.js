import React, { useContext } from "react";
import WebAboutCv from "../CvBuildingComponents/WebAboutCv";
import DataContacts from "../CvBuildingComponents/DataContacts";
import DataSkills from "../CvBuildingComponents/DataSkills";
import CvWorkExperiences from "../CvBuildingComponents/CvWorkExperiences";
import CvEducations from "../CvBuildingComponents/CvEducations";
import CvAchievements from "../CvBuildingComponents/CvAchievements";
import CvInformalEducations from "../CvBuildingComponents/CvInformalEducations";
import CvLanguages from "../CvBuildingComponents/CvLanguages";
import CvImg from "../CvBuildingComponents/CvImg";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import PdfModal from "../ModalForDownload/PdfModal";
import { CvContext } from "../../Context/ContextProvider";
function DataEditedCv() {
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
          <div className="row justify-content-center align-items-center pb-4">
            <CvImg></CvImg>
            <div className="col-12 col-md-9">
              <WebAboutCv></WebAboutCv>
            </div>
          </div>
          <div className="row justify-content-between py-2 data-contact">
            <DataContacts></DataContacts>
          </div>
          <div className="row py-4">
            <div className="col-12 col-md-6">
              <div className="row">
                <div
                  className="col-12"
                  data-tips="workExperience"
                  onClick={mouseTipsClick}
                >
                  <CvWorkExperiences></CvWorkExperiences>
                </div>
                <div
                  className="col-12"
                  data-tips="education"
                  onClick={mouseTipsClick}
                >
                  <CvEducations></CvEducations>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row pb-4">
                <div
                  className="col-12"
                  data-tips="skills"
                  onClick={mouseTipsClick}
                >
                  <DataSkills></DataSkills>
                </div>
              </div>
              <div className="row pb-4">
                <CvAchievements></CvAchievements>
              </div>
              <div className="row pb-4">
                <CvLanguages></CvLanguages>
              </div>
              <div className="row pb-4">
                <div className="col-12">
                  <CvInformalEducations></CvInformalEducations>
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
}

export default DataEditedCv;
