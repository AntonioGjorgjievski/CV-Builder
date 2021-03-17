import React, { useContext } from "react";
import Achievement from "./Achievement";
import { CvContext } from "../../Context/ContextProvider";
const WebAchievementCv = () => {
  const { achievement, addAchievement, clickedCategory } = useContext(
    CvContext
  );
  return (
    <div className="col-12">
      <div className="d-flex position-relative">
        <h5
          className={
            clickedCategory === "Web Development"
              ? "font-weight-bold mb-3 "
              : "h4 title-education mb-3 "
          }
        >
          ACHIEVEMENTS & CERTIFICATES
        </h5>
        <button
          data-html2canvas-ignore
          onClick={addAchievement}
          className="addAchievement"
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
      {achievement &&
        achievement.map((el, i) => (
          <Achievement
            key={i}
            id={el.id}
            achv={el.achv}
            desc={el.desc}
          ></Achievement>
        ))}
    </div>
  );
};

export default WebAchievementCv;
