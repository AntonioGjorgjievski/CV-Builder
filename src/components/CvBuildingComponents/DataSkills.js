import React, { useContext } from "react";
import DataSkill from "./DataSkill";

import { CvContext } from "../../Context/ContextProvider";
const DataSkills = () => {
  const { skills, addSkill, clickedCategory } = useContext(CvContext);
  return (
    <>
      <div className="d-flex">
        <h4 className="mb-3 title-education">SKILLS</h4>
        <button data-html2canvas-ignore onClick={addSkill} className="addIcon">
          <i
            className={
              clickedCategory === "Web Development"
                ? "fas fa-plus-square blue hoverBtn"
                : "fas fa-plus-square grey hoverBtn"
            }
          ></i>
        </button>
      </div>
      {skills &&
        skills.map((skill, i) => (
          <DataSkill
            key={i}
            id={skill.id}
            skill={skill.skill}
            level={skill.level}
          ></DataSkill>
        ))}
    </>
  );
};

export default DataSkills;
