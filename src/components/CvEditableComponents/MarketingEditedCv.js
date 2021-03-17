import React, { useContext } from "react";
import CvImg from "../CvBuildingComponents/CvImg";
import WebAboutCv from "../CvBuildingComponents/WebAboutCv";
import DataContacts from "../CvBuildingComponents/DataContacts";
import CvWorkExperiences from "../CvBuildingComponents/CvWorkExperiences";
import CvEducations from "../CvBuildingComponents/CvEducations";
import WebSkillsCv from "../CvBuildingComponents/WebSkillsCv";
import CvAchievements from "../CvBuildingComponents/CvAchievements";
import CvLanguages from "../CvBuildingComponents/CvLanguages";
import { CvContext } from "../../Context/ContextProvider";
import { Link } from "react-router-dom";
import PdfModal from "..//ModalForDownload/PdfModal";
import ReactTooltip from "react-tooltip";
const MarketingEditedCv = () => {
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
          <div className="row  py-3 marketing-contact">
            <DataContacts></DataContacts>
          </div>
          <div className="row py-3">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 py-2">
                  <div
                    className="row"
                    data-tips="workExperience"
                    onClick={mouseTipsClick}
                  >
                    <CvWorkExperiences></CvWorkExperiences>
                  </div>
                </div>
                <div className="col-12 py-2">
                  <div
                    className="row"
                    data-tips="education"
                    onClick={mouseTipsClick}
                  >
                    <CvEducations></CvEducations>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 py-2">
              <div className="row" data-tips="skills" onClick={mouseTipsClick}>
                <div className="col">
                  <WebSkillsCv></WebSkillsCv>
                </div>
              </div>
              <div className="row py-3">
                <CvAchievements></CvAchievements>
              </div>
              <div
                className="row"
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

export default MarketingEditedCv;
