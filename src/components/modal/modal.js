import React from 'react';
import './modal.scss';

function Modal({children, handleModal, title}) {
  const closeModal = () => {
    handleModal(false);
  };

  return (
    <div className="modal__overlay">
      <div className="modal__container">
        <div className="modal__container__button__container">
          <div className="modal__container__button--close" onClick={closeModal}>
            Close
          </div>
        </div>
        <div className="modal__body">
          <div className="modal__body__title">
            <p>{title}</p>
          </div>
          <div className="modal__body__content">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
