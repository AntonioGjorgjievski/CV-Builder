import React, { useContext } from "react";
import Language from "./Language";
import { CvContext } from "../../Context/ContextProvider";
const WebLanguagesCv = () => {
  const { language, addLanguage, clickedCategory } = useContext(CvContext);

  return (
    <>
      <div className="col-12 d-flex">
        <h5
          className={
            clickedCategory === "Web Development"
              ? "font-weight-bold"
              : "h4 title-education"
          }
        >
          LANGUAGES
        </h5>
        <button
          data-html2canvas-ignore
          onClick={addLanguage}
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
      <div className="col">
        <h5>
          {language &&
            language.map((el, i) => (
              <Language
                key={i}
                id={el.id}
                level={el.level}
                idx={i}
                language={el.language}
              ></Language>
            ))}
        </h5>
      </div>
    </>
  );
};

export default WebLanguagesCv;
