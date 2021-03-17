import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CvContext } from "../../Context/ContextProvider";
import StarRatingComponent from "react-star-rating-controlled-component";
const DataSkill = ({ id, skill, level }) => {
  const [focusOnSkill, setFocusOnSkill] = useState(false);
  const {
    updateSkillInput,
    deleteSkill,
    clickedCategory,
    handleSkillLevel,
  } = useContext(CvContext);
  return (
    <div className="d-flex align-items-center justify-content-between mb-2">
      <div className="position-relative">
        {focusOnSkill && (
          <button
            className={
              clickedCategory === "Web Development"
                ? "deliteSkill"
                : "deleteDataSkill"
            }
            name="deleteSkill"
            onMouseDown={(e) => {
              deleteSkill(e, id);
            }}
          >
            <i className="fas fa-trash"></i>
          </button>
        )}
        <TextareaAutosize
          name="name"
          className="editInputs w-100 mb-0"
          value={skill}
          placeholder={skill}
          onFocus={() => setFocusOnSkill(true)}
          onBlur={() => setFocusOnSkill(false)}
          onChange={(e) => {
            updateSkillInput(e, id);
          }}
          type="text"
        />
      </div>
      {clickedCategory === "Design" ? (
        <div></div>
      ) : (
        <StarRatingComponent
          name={skill}
          editing={true}
          onStarClick={(e) => {
            handleSkillLevel(e, id);
          }}
          renderStarIcon={() => (
            <div className="ml-2 p-2 rounded-circle hover"></div>
          )}
          starCount={5}
          value={level}
        />
      )}
      {/*clickedCategory === "Design" ? (
        <div></div>
      ) : (
        <Rating
          style={{ color: "black", fontSize: "27px" }}
          icon={<FiberManualRecordIcon fontSize="inherit" />}
          value={value}
          max={5}
          empty="far fa-circle"
          full="fas fa-circle"
        />
      )*/}
    </div>
  );
};

export default DataSkill;
