export const boxNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
let crossArray: string[] = [];
let circleArray: string[] = [];

export const winArray = [
	['0', '1', '2'],
	['3', '4', '5'],
	['6', '7', '8'],
	['0', '3', '6'],
	['1', '4', '7'],
	['2', '5', '8'],
	['0', '4', '8'],
	['2', '5', '8'],
];

export const randomlyGenerateXorO = () => {
	const random = Math.floor(Math.random() * 2);
	return random === 0 ? "X" : "O";
};


export const getStatus = (boxNumber: string) => {
	let shapeSelector: string;

	shapeSelector = randomlyGenerateXorO();
	if (shapeSelector === "X") {
		crossArray = [...crossArray, boxNumber];
		// shapeSelector = "";
	} else {
		circleArray = [...circleArray, boxNumber];
		// shapeSelector = "";
	}
	return { crossArray, circleArray, shapeSelector };
};

