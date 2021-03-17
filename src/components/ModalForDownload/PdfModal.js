import React, { useContext } from "react";
import { Modal } from "@material-ui/core";
import { CvContext } from "../../Context/ContextProvider";
const PdfModal = () => {
  const modalStyle = {
    position: "absolute",
    width: 440,
    padding: "50px 30px",
    textAlign: "center",
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "5px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const {
    isWeAreLaikaChecked,
    isLinkedInChecked,
    modal,
    handleCloseModal,
  } = useContext(CvContext);
  return (
    <Modal
      open={modal}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle}>
        <p>
          {!isLinkedInChecked && !isWeAreLaikaChecked
            ? "Please check LinkedIn and WeAreLaika component"
            : !isLinkedInChecked
            ? "Please check LinkedIn component"
            : "Please check WeAreLaika component"}
        </p>
      </div>
    </Modal>
  );
};

export default PdfModal;
