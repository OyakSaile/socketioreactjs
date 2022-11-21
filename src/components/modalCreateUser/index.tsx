import React, { FormEvent, SetStateAction, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { ModalContent } from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

interface ModalCreateUserProps {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreateUser: React.FC<ModalCreateUserProps> = ({
  modalIsOpen,
  setIsOpen,
}) => {
  const [userName, setUserName] = useState("");
  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  const handleSendUserName = (e: FormEvent) => {
    window.localStorage.setItem("userName", userName);
      
    e.preventDefault();
    setIsOpen(false);
    alert(userName);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      style={customStyles}
    >
      <ModalContent onSubmit={handleSendUserName}>
        <p>Para acessar o chat informe um nome de usuário.</p>
        <span>Passo obrigatório</span>
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button disabled={!userName}>Enviar</button>
      </ModalContent>
    </Modal>
  );
};
