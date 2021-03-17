import React, { useContext } from "react";
import Education from "./Education";
import { CvContext } from "../../Context/ContextProvider";

const WebCvEducations = () => {
  const { addEducation, education, clickedCategory } = useContext(CvContext);

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
                ? "font-weight-bold  margin"
                : clickedCategory === "Digital Marketing"
                ? "h4 title-education margin"
                : "h4 title-education"
            }
          >
            EDUCATION
          </h5>
          <button
            data-html2canvas-ignore
            onClick={addEducation}
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
      {education &&
        education.map((el, i) => (
          <Education
            key={i}
            title={el.title}
            id={el.id}
            company={el.company}
            mnthStart={el.mnthStart}
            yearStart={el.yearStart}
            mnthEnd={el.mnthEnd}
            check={el.check}
            yearEnd={el.yearEnd}
            city={el.city}
            accomplishments={el.accomplishments}
            edDescription={el.edDescription}
          ></Education>
        ))}
    </div>
  );
};

export default WebCvEducations;
