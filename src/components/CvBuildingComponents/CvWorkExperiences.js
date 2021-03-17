import React, { useContext } from "react";
import WorkExperience from "./WorkExperience";
import { CvContext } from "../../Context/ContextProvider";
const WebCvWorkExperiences = () => {
  const { addExperience, workExperience, clickedCategory } = useContext(
    CvContext
  );

  return (
    <div>
      <div className="row">
        <div
          className={
            clickedCategory === "Web Development"
              ? "col-11 ml-3 d-flex"
              : clickedCategory === "Digital Marketing"
              ? "col-11 ml-3 d-flex"
              : "col-12 d-flex"
          }
        >
          <h5
            className={
              clickedCategory === "Web Development"
                ? "font-weight-bold margin"
                : clickedCategory === "Digital Marketing"
                ? "h4 title-education margin"
                : "h4 title-education"
            }
          >
            WORK EXPERIENCE
          </h5>
          <button
            data-html2canvas-ignore
            onClick={addExperience}
            className="addIcon mb-1"
          >
            <i
              className={
                clickedCategory === "Web Development"
                  ? "fas fa-plus-square blue hoverBtn"
                  : clickedCategory === "Digital Marketing"
                  ? "fas fa-plus-square dark-blue hoverBtn"
                  : "fas fa-plus-square grey hoverBtn"
              }
            ></i>
          </button>
        </div>
      </div>
      {workExperience &&
        workExperience.map((el, i) => (
          <WorkExperience
            key={i}
            title={el.title}
            id={el.id}
            company={el.company}
            mnthStart={el.mnthStart}
            yearStart={el.yearStart}
            mnthEnd={el.mnthEnd}
            yearEnd={el.yearEnd}
            city={el.city}
            check={el.check}
            accomplishments={el.accomplishments}
            jobDescription={el.jobDescription}
          ></WorkExperience>
        ))}
    </div>
  );
};

export default WebCvWorkExperiences;
