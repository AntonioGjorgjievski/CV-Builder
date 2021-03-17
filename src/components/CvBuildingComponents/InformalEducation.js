import React, { useContext, useState } from "react";
import { CvContext } from "../../Context/ContextProvider";
import AutosizeInput from "react-input-autosize";

const InformalEducation = ({ id, text }) => {
  const edStyle = {
    border: "1px solid lightgrey",
    background: "#fff",
    color: "#000",
    padding: "5px",
    borderRadius: "4px",
  };
  const { updateInformalEdInput, deleteInformalEd } = useContext(CvContext);
  const [focusOnInformalEd, setFocusOnInformalEd] = useState(false);
  return (
    <div className="row">
      <div className="col-auto mb-2 pr-0">
        <div className="position-relative">
          <AutosizeInput
            name="informalEd"
            maxLength="30"
            inputStyle={edStyle}
            onChange={(e) => {
              updateInformalEdInput(e, id);
            }}
            onFocus={() => setFocusOnInformalEd(true)}
            onBlur={() => setFocusOnInformalEd(false)}
            value={text}
            type="text"
          />
          {focusOnInformalEd && (
            <button
              className="deliteSkill"
              name="deleteSkill"
              onMouseDown={(e) => {
                deleteInformalEd(e, id);
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformalEducation;
