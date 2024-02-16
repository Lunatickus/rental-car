import { useEffect } from "react";
import { ModalStyled } from "./Modal.styled";

export const Modal = ({ closeModal, advert }) => {
  useEffect(() => {
    const onEsc = ({ code }) => {
      if (code !== "Escape") {
        return;
      }

      closeModal();
    };

    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("keydown", onEsc);
    };
  }, [closeModal]);

  const onBackdrop = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }

    closeModal();
  };

  return (
    <ModalStyled onClick={onBackdrop}>
      <div className="modal">
        <button type="button" onClick={closeModal}>
          Close modal
        </button>
        <img src={advert.img} alt="car" />
      </div>
    </ModalStyled>
  );
};
