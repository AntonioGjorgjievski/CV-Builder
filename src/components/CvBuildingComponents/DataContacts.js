import React, { useContext } from "react";
import { CvContext } from "../../Context/ContextProvider";
import DataContact from "./DataContact";
const DataContacts = () => {
  const { contact } = useContext(CvContext);
  return (
    <>
      {contact &&
        contact.map((el, idx) => (
          <DataContact
            key={idx}
            idx={idx}
            icon={el.icon}
            text={el.text}
            name={el.name}
            mail={el.mail}
          ></DataContact>
        ))}
    </>
  );
};

export default DataContacts;
