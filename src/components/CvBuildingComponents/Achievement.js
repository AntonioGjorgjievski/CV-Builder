import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CvContext } from "../../Context/ContextProvider";
const WebAchievement = ({ id, achv, desc }) => {
  const { deleteAchievement, updateAchievementInput } = useContext(CvContext);

  const [focusAchievement, setFocusAchievement] = useState(false);
  return (
    <div>
      <div className="position-relative">
        {focusAchievement && (
          <button
            onMouseDown={() => {
              deleteAchievement(id);
            }}
            className="deleteAchievement"
            name="deleteAchievement"
          >
            <i className="fas fa-trash"></i>
          </button>
        )}
        <TextareaAutosize
          className="editInputs w-100"
          name="achv"
          value={achv}
          onChange={(e) => {
            updateAchievementInput(e, id);
          }}
          onFocus={() => {
            setFocusAchievement(true);
          }}
          onBlur={() => {
            setFocusAchievement(false);
          }}
          placeholder="Achievement"
          type="text"
        />
      </div>
      <TextareaAutosize
        className="editInputs sz-14 w-100 font-italic text-muted"
        name="desc"
        value={desc}
        onChange={(e) => {
          updateAchievementInput(e, id);
        }}
        placeholder="If needed write here description about achievement"
        type="text"
      />
    </div>
  );
};

export default WebAchievement;
