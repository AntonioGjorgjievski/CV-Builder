import React, { useState, useContext } from "react";
import addImg from "../../images/CV-images/addimg.png";
import { CvContext } from "../../Context/ContextProvider";
const WebImgCv = () => {
  const {
    img,
    fileUploadInputChange,
    clickedCategory,
    mouseTipsClick,
  } = useContext(CvContext);
  const [inputReference, setInputReference] = useState(React.createRef());
  return (
    <div
      className="col-12 col-md-3 text-center"
      data-tips="img"
      onClick={mouseTipsClick}
    >
      <label htmlFor="attach-image">
        <img
          role="button"
          src={img.img ? img.img : addImg}
          className={
            clickedCategory === "Web Development"
              ? "rounded-circle elon"
              : "rounded-circle aleksandra"
          }
          alt=""
        />
      </label>
      <input
        type="file"
        id="attach-image"
        hidden
        ref={inputReference}
        onChange={fileUploadInputChange}
      />
    </div>
  );
};

export default WebImgCv;
