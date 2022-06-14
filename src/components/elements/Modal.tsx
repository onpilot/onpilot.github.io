import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 500ms ease-in;
  z-index: 2;

  &:target {
    visibility: hidden;
    opacity: 0;
  }

  & .popup {
    position: relative;
    width: 400px;
    max-width: 95%;
    background: white;
    border-radius: 4px;
    transition: 500ms;
    padding: 40px;
  }

  & .popup .sig {
    color: #ff9a9e;
  }

  & .popup .signame {
    margin-top: 10px;
  }

  & .popup .close {
    position: absolute;
    top: 10px;
    right: 20px;
    transition: 250ms;
    font-size: 24px;
    text-decoration: none;
    color: var(--red);
    padding: 2px;
  }

  & .popup .close:hover {
    color: #ff9a9e;
  }
`;

const Modal = () => {
  return (
    <StyledModal id='popup-init-msg' className='overlay'>
      <div className='popup'>
        <a className='close' href='#popup-init-msg'>
          &times;
        </a>
        <h2>Welcome to my site</h2>
        <small>
          ☢️ This site is heavily under development, so some functionalities
          might be unavailable at this time.
        </small>
        <small className='sig'> Thank you.</small>
        <h5 className='signame'>~ Idan</h5>
      </div>
    </StyledModal>
  );
};

export default Modal;
