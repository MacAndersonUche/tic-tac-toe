import React from "react";
import ReactModal from "react-modal";
import { modalStyles } from "../../styles";
import { ModalProps } from "../../types";

ReactModal.setAppElement("#main");
const Modal = ({
	modalIsOpen,
	afterOpenModal,
	closeModal,
	result,
}: ModalProps) => {
 
	return (
		<ReactModal
			isOpen={modalIsOpen}
			onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={modalStyles}
		>
			<div>
				<h1>{result} </h1>
				<button onClick={closeModal}>Restart</button>
			</div>
		</ReactModal>
	);
};

export default Modal;
