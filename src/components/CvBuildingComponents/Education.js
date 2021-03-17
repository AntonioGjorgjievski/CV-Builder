import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EdTask from "./EdTask";
import { CvContext } from "../../Context/ContextProvider";
const WebEducation = ({
  id,
  title,
  company,
  mnthStart,
  yearStart,
  mnthEnd,
  yearEnd,
  city,
  check,
  accomplishments,
  edDescription,
}) => {
  const {
    updateEducation,
    deleteEducation,
    clickedCategory,
    updateCheckEducationValue,
  } = useContext(CvContext);
  const [focusExperience, setFocusExperience] = useState(false);
  const [checkFocus, setCheckFocus] = useState(false);

  return (
    <div className="d-flex">
      {clickedCategory === "Web Development" ? (
        <div className="col-1 mr-3 px-0">
          <div className="mt-3 blue-square"></div>
        </div>
      ) : clickedCategory === "Digital Marketing" ? (
        <div className="col-1 mr-3  px-0">
          <div className="dark-square mt-4"></div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="row">
        <div className="col-11 mt-2 position-relative">
          {focusExperience && (
            <button
              onMouseDown={() => {
                deleteEducation(id);
              }}
              className={
                clickedCategory === "Web Development"
                  ? "deleteExperience"
                  : clickedCategory === "Digital Marketing"
                  ? "deleteExperienceMarketing"
                  : "deleteExperienceDataS"
              }
            >
              <i className="fas fa-trash sz-14"></i>
            </button>
          )}
          <TextareaAutosize
            name="title"
            className="editInputs sz-19  w-100 mb-0"
            value={title}
            onFocus={() => {
              setFocusExperience(true);
            }}
            onBlur={() => {
              setFocusExperience(false);
            }}
            placeholder="Study program"
            onChange={(e) => {
              updateEducation(e, id);
            }}
            type="text"
          />
          <TextareaAutosize
            name="company"
            className="editInputs sz-16  w-100 mb-0"
            value={company}
            placeholder="Institution"
            onFocus={() => {
              setFocusExperience(true);
            }}
            onBlur={() => {
              setFocusExperience(false);
            }}
            onChange={(e) => {
              updateEducation(e, id);
            }}
            type="text"
          />
          <div className="row">
            <div className="col-8 col-lg-7">
              <div className="d-flex">
                <TextareaAutosize
                  maxLength="2"
                  name="mnthStart"
                  value={mnthStart}
                  onFocus={() => {
                    setCheckFocus(true);
                  }}
                  onBlur={() => {
                    setCheckFocus(false);
                  }}
                  className={
                    clickedCategory === "Web Development"
                      ? "editInputs mnth blue sz-14 mb-0"
                      : clickedCategory === "Digital Marketing"
                      ? "editInputs mnth dark-blue sz-14 mb-0"
                      : "editInputs mnth grey sz-14 mb-0"
                  }
                  placeholder="00"
                  onChange={(e) => {
                    updateEducation(e, id);
                  }}
                  type="number"
                />
                <p
                  className={
                    clickedCategory === "Web Development"
                      ? "blue"
                      : clickedCategory === "Digital Marketing"
                      ? "dark-blue"
                      : "grey"
                  }
                >
                  /
                </p>
                <TextareaAutosize
                  maxLength="4"
                  name="yearStart"
                  onFocus={() => {
                    setCheckFocus(true);
                  }}
                  onBlur={() => {
                    setCheckFocus(false);
                  }}
                  className={
                    clickedCategory === "Web Development"
                      ? "editInputs year blue sz-14 mb-0"
                      : clickedCategory === "Digital Marketing"
                      ? "editInputs year dark-blue sz-14 mb-0"
                      : "editInputs year grey sz-14 mb-0"
                  }
                  value={yearStart}
                  placeholder="2000"
                  onChange={(e) => {
                    updateEducation(e, id);
                  }}
                  type="number"
                />
                <p
                  className={
                    clickedCategory === "Web Development"
                      ? "blue"
                      : clickedCategory === "Digital Marketing"
                      ? "dark-blue"
                      : "grey"
                  }
                >
                  {" "}
                  -{" "}
                </p>
                {check === true ? (
                  <p
                    className={
                      clickedCategory === "Web Development"
                        ? "ml-2 blue "
                        : clickedCategory === "Digital Marketing"
                        ? "ml-2 dark-blue"
                        : "ml-2 grey"
                    }
                  >
                    Present
                  </p>
                ) : (
                  <>
                    <TextareaAutosize
                      maxLength="2"
                      name="mnthEnd"
                      className={
                        clickedCategory === "Web Development"
                          ? "editInputs mnth blue sz-14 mb-0"
                          : clickedCategory === "Digital Marketing"
                          ? "editInputs mnth dark-blue sz-14 mb-0"
                          : "editInputs mnth grey sz-14 mb-0"
                      }
                      value={mnthEnd}
                      placeholder="00"
                      onChange={(e) => {
                        updateEducation(e, id);
                      }}
                      type="number"
                    />
                    <p
                      className={
                        clickedCategory === "Web Development"
                          ? "blue"
                          : clickedCategory === "Digital Marketing"
                          ? "dark-blue"
                          : "grey"
                      }
                    >
                      /
                    </p>
                    <TextareaAutosize
                      maxLength="4"
                      name="yearEnd"
                      className={
                        clickedCategory === "Web Development"
                          ? "editInputs year blue sz-14 mb-0"
                          : clickedCategory === "Digital Marketing"
                          ? "editInputs year dark-blue sz-14 mb-0"
                          : "editInputs year grey sz-14 mb-0"
                      }
                      value={yearEnd}
                      placeholder="2000"
                      onChange={(e) => {
                        updateEducation(e, id);
                      }}
                      type="number"
                    />
                  </>
                )}
              </div>
            </div>
            {checkFocus && (
              <div className="col-2">
                <div className="d-flex align-items-center">
                  <input
                    name="check"
                    checked={check}
                    type="checkbox"
                    onMouseDown={(e) => {
                      updateCheckEducationValue(e, id);
                    }}
                    className="mr-1"
                  />
                  Present
                </div>
              </div>
            )}
            <div className="col-12 col-lg-5 text-right">
              <TextareaAutosize
                name="city"
                className={
                  clickedCategory === "Web Development"
                    ? "editInputs text-right blue sz-14  w-100"
                    : clickedCategory === "Digital Marketing"
                    ? "editInputs text-right dark-blue sz-14  w-100"
                    : "editInputs text-right grey sz-14  w-100"
                }
                value={city}
                placeholder="City, Country"
                onChange={(e) => {
                  updateEducation(e, id);
                }}
                type="text"
              />
            </div>
          </div>

          <TextareaAutosize
            className={
              clickedCategory === "Web Development"
                ? "editInputs blue sz-14  w-100"
                : clickedCategory === "Digital Marketing"
                ? "editInputs dark-blue sz-14  w-100"
                : "editInputs grey sz-14  w-100"
            }
            name="accomplishments"
            value={accomplishments}
            onFocus={() => {
              setFocusExperience(true);
            }}
            onBlur={() => {
              setFocusExperience(false);
            }}
            placeholder="Studied/Courses"
            onChange={(e) => {
              updateEducation(e, id);
            }}
            type="text"
          />
          <ul
            className={
              clickedCategory === "Web Development"
                ? "squere-ul-list line-height"
                : clickedCategory === "Digital Marketing"
                ? "circle-ul-list line-height"
                : clickedCategory === "Design"
                ? "design-list line-height"
                : "line-data-ul-list line-height"
            }
          >
            {edDescription &&
              edDescription.map((el, i) => (
                <EdTask
                  key={i}
                  index={i}
                  parentId={id}
                  task={el.task}
                  id={el.id}
                ></EdTask>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebEducation;
