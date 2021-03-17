import React, { useContext } from "react";
import WebContact from "./WebContact";
import { CvContext } from "../../Context/ContextProvider";
const WebContactCv = () => {
  const { contact, mouseTipsClick } = useContext(CvContext);
  return (
    <div className="col" data-tips="contact" onClick={mouseTipsClick}>
      <ul className="elon-contact">
        {contact &&
          contact.map((el, i) => (
            <WebContact
              key={i}
              name={el.name}
              text={el.text}
              icon={el.icon}
              idx={i}
            ></WebContact>
          ))}
      </ul>
    </div>
  );
};

export default WebContactCv;
