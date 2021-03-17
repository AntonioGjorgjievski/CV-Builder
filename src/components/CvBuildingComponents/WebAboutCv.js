import React, { useContext } from "react";
import { CvContext } from "../../Context/ContextProvider";
import TextareaAutosize from "react-textarea-autosize";
const WebAboutCv = () => {
  const {
    about,
    updateAboutInput,
    clickedCategory,
    mouseTipsClick,
  } = useContext(CvContext);

  return (
    <>
      {about &&
        about.map((el, i) => (
          <>
            <TextareaAutosize
              name="name"
              key="1"
              maxLength={clickedCategory === "Design" ? "26" : ""}
              className={
                clickedCategory === "Design"
                  ? "editInputs font-weight-bold designer-name w-100 mb-0"
                  : "editInputs h2 font-weight-bold w-100 mb-0"
              }
              value={el.name}
              placeholder="Full Name"
              onChange={(e) => {
                updateAboutInput(e, el.id);
              }}
              type="text"
              data-tips="about"
              onClick={mouseTipsClick}
            />
            <TextareaAutosize
              name="title"
              key="2"
              maxLength={clickedCategory === "Design" ? "72" : ""}
              className={
                clickedCategory === "Design"
                  ? "font-weight-bold line-height text-uppercase designer-desc margin-botom text-center w-100 editInputs"
                  : "editInputs font-weight-bold grey line-height w-100"
              }
              value={el.title}
              placeholder="Proffesional title"
              onChange={(e) => {
                updateAboutInput(e, el.id);
              }}
              type="text"
              data-tips="about"
              onClick={mouseTipsClick}
            />
            {clickedCategory === "Design" ? (
              <div></div>
            ) : (
              <TextareaAutosize
                name="about"
                key="3"
                className={
                  clickedCategory === "Design"
                    ? "editInputs text-center line-height about-designer-width"
                    : "editInputs line-height w-100"
                }
                value={el.about}
                placeholder="About me"
                onChange={(e) => {
                  updateAboutInput(e, el.id);
                }}
                type="text"
                data-tips="about"
                onClick={mouseTipsClick}
              />
            )}
          </>
        ))}
    </>
  );
};

export default WebAboutCv;
