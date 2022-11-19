import React from "react";
import { Box } from "../../styles";
import { SingleButtonProps } from "../../types";
import { randomlyGenerateXorO, getStatus } from "../../utlities/variables";

const SingleButton = ({
	boxNumber,
	setCrossesArr,
	setNoughtsArr,
	setOpen,
}: SingleButtonProps) => {
	const [display, setDisplay] = React.useState("");

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const valueToDisplay = randomlyGenerateXorO();
		const { crossArray, circleArray } = getStatus(boxNumber, valueToDisplay);

		setCrossesArr(crossArray);
		setNoughtsArr(circleArray);

		setDisplay(valueToDisplay);
		if (boxNumber === "8") {
			setOpen(true);
		}
	};

	return (
		<button data-test-id='submit-button' onClick={handleClick} style={Box}>
			{display}
		</button>
	);
};

export default SingleButton;
