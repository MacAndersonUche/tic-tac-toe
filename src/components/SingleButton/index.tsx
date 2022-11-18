import React from "react";
import { randomlyGenerateXorO, getStatus } from "../../variables";

interface Props {
	boxNumber: string;
	isActive?: boolean;
	setCrossesArr: (value: string[]) => void;
	setNoughtsArr: (value: string[]) => void;
}

const SingleButton = ({ boxNumber, setCrossesArr,setNoughtsArr }: Props) => {
	const [display, setDisplay] = React.useState("");



	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const valueToDisplay = randomlyGenerateXorO();
		const {crossArray, circleArray,} = getStatus(boxNumber, valueToDisplay);

		setCrossesArr(crossArray);
		setNoughtsArr(circleArray);
		
		setDisplay(valueToDisplay);
		console.log(crossArray);
	};

	return (
		<button
		className='box'
			onClick={handleClick}
			style={{ background: "grey" }}
		>
			{ display}
		</button>
	);
};

export default SingleButton;
