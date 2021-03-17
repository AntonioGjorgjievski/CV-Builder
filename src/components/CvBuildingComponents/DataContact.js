import React, { useContext, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { CvContext } from "../../Context/ContextProvider";
const DataContact = ({ idx, icon, name, text }) => {
  const {
    updateContactInputs,
    deleteContact,
    clickedCategory,
    mouseTipsClick,
  } = useContext(CvContext);
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
    <div className="col-auto" data-tips="contact" onClick={mouseTipsClick}>
      <div className="d-flex align-items-center justify-content-center position-relative">
        {contactFocus && (
          <button
            onMouseDown={(e) => {
              deleteContact(e, idx);
            }}
            className="deleteContactData"
            name="deleteContactData"
          >
            <i className="fas fa-trash"></i>
          </button>
        )}
        <div>
          <i className={icon}></i>
        </div>

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
            clickedCategory === "Data Science"
              ? "editInputs ml-3 mb-0 "
              : "editInputs ml-3 mb-0 marketing-contact"
          }
          name={name}
          placeholder={text}
          value={text}
          type="text"
        />
      </div>
    </div>
  );
};

export default DataContact;
