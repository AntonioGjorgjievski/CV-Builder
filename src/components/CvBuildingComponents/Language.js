import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CvContext } from "../../Context/ContextProvider";
const WebLanguage = ({ id, idx, language, level }) => {
  const {
    deleteLanguage,
    updateLanguageInput,
    languageChangeHandler,
    mouseTipsClick,
  } = useContext(CvContext);

  const [focusOnLanguage, setFocusOnLanguage] = useState(false);

  return (
    <div className="position-relative">
      <TextareaAutosize
        name="language"
        className="editInputs w-100 mb-0"
        value={language}
        placeholder="Language"
        onFocus={() => {
          setFocusOnLanguage(true);
        }}
        onBlur={() => {
          setFocusOnLanguage(false);
        }}
        onChange={(e) => {
          updateLanguageInput(e, id);
        }}
        type="text"
        data-tips="language"
        onClick={mouseTipsClick}
      />
      {focusOnLanguage && (
        <button
          className="deliteLnguage"
          name="deleteLnguage"
          onMouseDown={(e) => {
            deleteLanguage(e, id);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      )}
      {!focusOnLanguage ? (
        <input
          type="text"
          readOnly
          onFocus={() => setFocusOnLanguage(true)}
          className="language-level"
          value={
            level === 1
              ? "Elementary Proficiency"
              : level === 2
              ? "Limited Working Proficiency"
              : level === 3
              ? "Professional Working Proficiency"
              : level === 4
              ? "Full Professional Proficiency"
              : "Native or Bilingual Proficiency"
          }
        />
      ) : (
        <div className="language-span">
          <span
            onMouseDown={(e) => languageChangeHandler(e, idx)}
            className="1"
            onClick={() => setFocusOnLanguage(false)}
          >
            1/5
          </span>
          <span
            onMouseDown={(e) => languageChangeHandler(e, idx)}
            className="2"
            onClick={() => setFocusOnLanguage(false)}
          >
            2/5
          </span>
          <span
            onMouseDown={(e) => languageChangeHandler(e, idx)}
            className="3"
            onClick={() => setFocusOnLanguage(false)}
          >
            3/5
          </span>
          <span
            onMouseDown={(e) => languageChangeHandler(e, idx)}
            className="4"
            onClick={() => setFocusOnLanguage(false)}
          >
            4/5
          </span>
          <span
            onMouseDown={(e) => languageChangeHandler(e, idx)}
            className="5"
            onClick={() => setFocusOnLanguage(false)}
          >
            5/5
          </span>
        </div>
      )}
    </div>
  );
};

export default WebLanguage;
