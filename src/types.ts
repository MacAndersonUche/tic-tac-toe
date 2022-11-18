export enum FinalState {
	CrossesWin = "Crosses Won",
	NoughtsWin = "Noughts Won",
	Draw = "Draw",
	None = "None",
}

export interface ModalProps {
	modalIsOpen: boolean;
	result: FinalState;
	afterOpenModal: () => void;
	closeModal: () => void;
}
export interface SingleButtonProps {
	boxNumber: string;
	setCrossesArr: (value: string[]) => void;
	setNoughtsArr: (value: string[]) => void;
	setOpen: (value: boolean) => void;
}
