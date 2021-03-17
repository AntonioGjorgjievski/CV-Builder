import React, { useContext, useState } from "react";
import { CvContext } from "../../Context/ContextProvider";
import AutosizeInput from "react-input-autosize";
const WebSill = ({ id, skill }) => {
  const { updateSkillInput, deleteSkill, clickedCategory } = useContext(
    CvContext
  );
  const [focusOnSkill, setFocusOnSkill] = useState(false);
  const skillStyle = {
    border: "none",
    background: "#2ebcb4",
    color: "#fff",
    padding: "5px",
    borderRadius: "4px",
  };
  const skillMarketingStyle = {
    border: "none",
    background: "#4a8c9c",
    color: "#fff",
    padding: "5px",
    borderRadius: "4px",
  };
  return (
    <div className="col-auto mb-2 pr-0">
      <div className="position-relative">
        <AutosizeInput
          name="skill"
          inputStyle={
            clickedCategory === "Web Development"
              ? skillStyle
              : skillMarketingStyle
          }
          onChange={(e) => {
            updateSkillInput(e, id);
          }}
          onFocus={() => setFocusOnSkill(true)}
          onBlur={() => setFocusOnSkill(false)}
          value={skill}
          type="text"
        />
        {focusOnSkill && (
          <button
            className="deliteSkill"
            name="deleteSkill"
            onMouseDown={(e) => {
              deleteSkill(e, id);
            }}
          >
            <i className="fas fa-trash"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default WebSill;
