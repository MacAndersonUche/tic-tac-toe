import React, { useEffect } from "react";

import "./App.css";
import SingleButton from "./components/SingleButton";
import { FinalState } from "./types";
import { boxNumbers, isSubset, winArray } from "./variables";

function App() {
	const [winner, setWinner] = React.useState<FinalState>(FinalState.Draw);
	const [noughtsArr, setNoughtsArr] = React.useState<string[]>([]);
	const [crossesArr, setCrossesArr] = React.useState<string[]>([]);

	useEffect(() => {
		const noughtResult: string[][] = winArray.filter((won) =>
			isSubset(noughtsArr, won)
		);
		const crossResult: string[][] = winArray.filter((won) =>
			isSubset(crossesArr, won)
		);

		if (noughtResult.length > 0) {
			console.log("noughts won");

			setWinner(FinalState.NoughtsWin);
			return;
		}
		if (crossResult.length > 0) {
			console.log("Crosses Won");

			setWinner(FinalState.CrossesWin);
			return;
		}

		setWinner(FinalState.Draw);
	}, [noughtsArr, crossesArr]);

	return (
		<div>
			<div className='grid-container'>
				{boxNumbers.map((boxNumber) => {
					return (
						<SingleButton
							key={boxNumber}
							boxNumber={boxNumber}
							isActive={true}
							setCrossesArr={setCrossesArr}
							setNoughtsArr={setNoughtsArr}
						/>
					);
				})}
			</div>
			{winner !== FinalState.Draw && <h1>{winner}</h1>}
		</div>
	);
}

export default App;
