import React from "react";
import { Editor } from "@/app/utils/interfaces";
import "./EditorModal.css";

interface EditorModalProps {
  modalData: Editor | null;
  setShowModal: (show: boolean) => void;
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const EditorModal: React.FC<EditorModalProps> = ({
  modalData,
  setShowModal,
}) => {
  if (!modalData) return null;

  const { ediImg, ediEdu, ediExp, ediName } = modalData;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setShowModal(false)}>
          X
        </button>
        <div className="modal-body">
          <img src={ediImg} alt={ediName} />
          <h2>{ediName}</h2>
          <p>{truncateText(ediExp, 100)}</p>
        </div>
      </div>
    </div>
  );
};

export default EditorModal;
