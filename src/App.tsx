import React, { useEffect } from "react";

import "./App.css";
import {
	boxNumbers,
	winArray,
	getStatus,
  randomlyGenerateXorO,
} from "./variables";

function App() {
	const [display, setDisplay] = React.useState("");
	const [winner, setWinner] = React.useState("");
	const [noughtsArr, setNoughtsArr] = React.useState<string[]>([]);
	const [crossesArr, setCrossesArr] = React.useState<string[]>([]);
	const [active, setActive] = React.useState<(string | number)[]>([]);
	// const [isActive, setIsActive] = useState(false)

	useEffect(() => {
    setDisplay(randomlyGenerateXorO())
		const isSubset = (arr: string[], winArr: string[]) => {
			return winArr.every((val) => arr.includes(val));
		};

		const noughtResult: string[][] = winArray.filter((won) =>
			isSubset(noughtsArr, won)
		);
		const crossResult: string[][] = winArray.filter((won) =>
			isSubset(crossesArr, won)
		);

		if (noughtResult.length > 0) {
			setWinner("Noughts");
		}
		if (crossResult.length > 0) {
			setWinner("Crosses");
		}
	}, [noughtsArr, crossesArr]);

	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement>,
		isActive: boolean,
		boxNumber: string
	) => {
    const {crossArray, circleArray, shapeSelector } = getStatus(boxNumber)
    setNoughtsArr(circleArray)
    setCrossesArr(crossArray)
    setDisplay(shapeSelector)

    console.log(boxNumber);
    
    
		console.log('noghts: ', noughtsArr,'crosses:', crossesArr);

		setActive(
			isActive
				? active.filter((current) => current !== boxNumber)
				: [...active, boxNumber]
		);
    e.currentTarget.disabled = true;
	};

	return (
		<div className='grid-container'>
			{boxNumbers.map((boxNumber) => {
				const isActive = active.includes(boxNumber);

				return (
					<button
						key={boxNumber}
						onClick={(e) => handleClick(e, isActive, boxNumber)}
						style={{ background: isActive ? "grey" : "white" }}
					>
						{isActive && display}
					</button>
				);
			})}
		</div>
	);
}

export default App;
