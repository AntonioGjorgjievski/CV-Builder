import React, { useContext } from "react";
import { CvContext } from "../../Context/ContextProvider";
import InformalEducation from "./InformalEducation";
const CvInformalEducations = () => {
  const { informalEd, clickedCategory, addInformalEd } = useContext(CvContext);
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex">
          <h4 className="mb-3">INFORMAL EDUCATION</h4>
          <button
            data-html2canvas-ignore
            type="button"
            onClick={addInformalEd}
            className="addIcon"
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
      <div className="row">
        <div className="col-12">
          {informalEd &&
            informalEd.map((el, i) => (
              <InformalEducation
                key={i}
                id={el.id}
                text={el.text}
              ></InformalEducation>
            ))}
        </div>
      </div>
    </>
  );
};

export default CvInformalEducations;
