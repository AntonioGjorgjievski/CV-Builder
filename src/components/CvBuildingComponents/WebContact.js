import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CvContext } from "../../Context/ContextProvider";

const WebContact = ({ name, text, icon, idx }) => {
  const { updateContactInputs, deleteContact, clickedCategory } = useContext(
    CvContext
  );

  const [contactFocus, setContactFocus] = useState(false);

  const focusIcon = (idx) => {
    if (idx === 3) {
      setContactFocus(true);
    }
  };
  const blurIcon = (idx) => {
    if (idx === 3) {
      setContactFocus(false);
    }
  };
  return (
    <li style={{ position: "relative" }}>
      {contactFocus && (
        <button
          onMouseDown={(e) => {
            deleteContact(e, idx);
          }}
          className={
            clickedCategory === "Design"
              ? "designContactDelete"
              : "deliteContact"
          }
          name="deleteContact"
        >
          <i className="fas fa-trash"></i>
        </button>
      )}
      <div className="d-flex">
        <TextareaAutosize
          onChange={(e) => {
            updateContactInputs(e, idx);
          }}
          onFocus={() => {
            focusIcon(idx);
          }}
          onBlur={() => {
            blurIcon(idx);
          }}
          className={
            clickedCategory === "Design"
              ? "text-left editInputs w-100 mb-0"
              : "text-md-right editInputs w-100 mb-0"
          }
          name={name}
          placeholder={text}
          value={text}
          type="text"
        />
        {clickedCategory === "Design" ? (
          <span></span>
        ) : (
          <span>
            <i className={icon}></i>
          </span>
        )}
      </div>
    </li>
  );
};

export default WebContact;
