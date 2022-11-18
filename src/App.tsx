import React, { useEffect } from "react";

import Modal from "./components/Modal";
import SingleButton from "./components/SingleButton";
import { MainContainer } from "./styles";
import { FinalState } from "./types";
import { boxNumbers, isSubset, winArray } from "./variables";

function App() {
	let subtitle: any;
	const [result, setResult] = React.useState<FinalState>(FinalState.None);
	const [noughtsArr, setNoughtsArr] = React.useState<string[]>([]);
	const [crossesArr, setCrossesArr] = React.useState<string[]>([]);
	const [modalIsOpen, setIsOpen] = React.useState(false);


	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
		window.location.reload();
	}

	useEffect(() => {
		const noughtResult: string[][] = winArray.filter((won) =>
			isSubset(noughtsArr, won)
		);
		const crossResult: string[][] = winArray.filter((won) =>
			isSubset(crossesArr, won)
		);

		if (noughtResult.length > 0) {
			console.log("noughts won");
			setIsOpen(true);
			setResult(FinalState.NoughtsWin);
			return;
		}
		if (crossResult.length > 0) {
			console.log("Crosses Won");
			setIsOpen(true);

			setResult(FinalState.CrossesWin);
			return;
		}

		setResult(FinalState.Draw);

	}, [noughtsArr, crossesArr]);

	return (
		<div>
			<div style={MainContainer}>
				{boxNumbers.map((boxNumber) => {
					return (
						<SingleButton
							key={boxNumber}
							boxNumber={boxNumber}
							setCrossesArr={setCrossesArr}
							setNoughtsArr={setNoughtsArr}
							setOpen={setIsOpen}
						/>
					);
				})}
			</div>
			{ modalIsOpen && result !== FinalState.None  && (
				<Modal
					modalIsOpen={modalIsOpen}
					afterOpenModal={afterOpenModal}
					closeModal={closeModal}
					result={result}
				/>
			)}
		</div>
	);
}

export default App;
