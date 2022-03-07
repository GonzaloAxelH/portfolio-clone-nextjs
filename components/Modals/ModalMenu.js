import styled from "styled-components";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import IconClose from "../Icons/IconClose";
import ToogleTheme from "../Icons/ToogleTheme";
import Button from "../Buttons/Button";
import Link from "next/link";
import NavbarMobile from "../Navbar/NavbarMobile";
import useClick from "./useClick";
const StyledModalBody = styled.div`
  button {
    padding: 12px 0;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #111827;
    svg {
      width: 28px;
      fill: #111827;
    }
    span {
      margin-left: 0.8em;
    }
  }
`;
const StyledModal = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  background: white;
  width: 320px;
  border-radius: 9px;
  padding: 24px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1) !important;
  @media (max-width: 365px) {
    width: 90%;
    padding: 1em;
  }
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  background-color: rgb(0, 0, 0, 0.2);
  z-index: 99999;
  hr {
    opacity: 0.2;
    margin: 24px 0;
  }
  
`;

const Modal = ({ show, onClose, onToggleTheme }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [initModal, setInitModal] = useState(false);
  const [scrollBody,setScrollBody] = useState(false)
  const body = document.getElementById("body");
  const refModal = useRef();

  useEffect(() => {   
    setInitModal(document.getElementById("modal-root"));
    setIsBrowser(true);
    if(show){
      
    }
  }, []);

  const handleCloseClick = (e) => {
    onClose();
  };
  const clickOverlay = (e) => {
    if (refModal.current.contains(e.target)) {
      handleCloseClick();
    }
  };
  const modalContent = show ? (
    <StyledModalOverlay ref={refModal}>
      <StyledModal onClick={clickOverlay}>
        <StyledModalBody>
          <NavbarMobile handleCloseClick={handleCloseClick} />
          <hr />
          <Button fSize="small" onClick={onToggleTheme}>
            <ToogleTheme />
            <span>Change to dark theme</span>
          </Button>
        </StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser && initModal) {
    return ReactDOM.createPortal(modalContent, initModal);
  } else {
    return null;
  }
};

export default Modal;
