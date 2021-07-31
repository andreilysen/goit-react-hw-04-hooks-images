import { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

const Modal = ({ image, query, onCloseModal }) => {
  const EscCloseModal = (event) => {
    if (event.key === "Escape") {
      onCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", EscCloseModal);
    return () => window.removeEventListener("keydown", EscCloseModal);
  });

  const clickCloseModal = (e) => {
    onCloseModal();
  };

  return (
    <div className={styles.Overlay} onClick={clickCloseModal}>
      <div className={styles.Modal}>
        <img src={image} alt={query} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  image: PropTypes.string,
  query: PropTypes.string.isRequired,
};

export default Modal;
