import React from "react";
import "./CreatedBy.css";
function CreatedBy() {
  return (
    <div className="created-by">
      <p>
        Created with {"<3"} by the{" "}
        <span>
          <a href="https://codepreneurs.brainster.co/" target="_blank" >
            Brainster Coding Academy
          </a>
        </span>{" "}
        students and{" "}
        <span>
          <a href="https://www.wearelaika.com/" target="_blank" >wearelaika.com</a>
        </span>
      </p>
    </div>
  );
}

export default CreatedBy;
