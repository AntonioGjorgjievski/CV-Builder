import React, { useContext } from "react";
import WebSkil from "./WebSkill";
import { CvContext } from "../../Context/ContextProvider";
const WebSkillsCv = () => {
  const { skills, addSkill, clickedCategory } = useContext(CvContext);
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex">
          <h5
            className={
              clickedCategory === "Web Development"
                ? "font-weight-bold"
                : clickedCategory === "Digital Marketing"
                ? "h4 title-education"
                : "h4 title-education"
            }
          >
            SKILLS & COMPETENCIES
          </h5>

          <button
            data-html2canvas-ignore
            type="button"
            onClick={addSkill}
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
      <div className="row py-2">
        {skills &&
          skills.map((skill, i) => (
            <WebSkil key={i} id={skill.id} skill={skill.skill}></WebSkil>
          ))}
      </div>
    </>
  );
};

export default WebSkillsCv;
