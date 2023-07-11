import React from "react";
import useStore from "../../state/store";
import * as M from "./Modal.style";

const Modal = () => {
  const { setIsOpen, modalData } = useStore((state) => state);

  return (
    <M.Modal>
      <M.ModalBackground
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <M.ModalContents>
        <>
          <M.ModalTitle>
            {modalData[0].title[0]} <br /> {modalData[0].title[1]}
          </M.ModalTitle>
          <M.ModalCancelButton onClick={() => setIsOpen(false)}>
            뒤로가기
          </M.ModalCancelButton>
        </>
      </M.ModalContents>
    </M.Modal>
  );
};

export default Modal;
