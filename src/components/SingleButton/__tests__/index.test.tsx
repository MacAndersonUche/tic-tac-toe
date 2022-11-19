//check for the button text
//check for style
//check the click function is called
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SingleButton from "..";
import { Box } from "../../../styles";

// const onclick = jest.fn(() => "X");
// jest.mock("../../../utlities/variables", () => ({
// 	randomlyGenerateXorO: jest.fn(() => "X"),
//     getStatus: jest.fn(() => ({
//         crossArray: ["0", "1", "2"],
//         circleArray: ["3", "4", "5"]
//     }))

// }));

describe("SingleButton", () => {
	const setMocks = jest.fn();

	beforeEach(() => {
		render(
			<SingleButton
				boxNumber='0'
				setCrossesArr={setMocks}
				setNoughtsArr={setMocks}
				setOpen={setMocks}
			/>
		);
	});

	it("should render the button", () => {
		const btn = screen.getByRole("button");

		expect(btn).toBeInTheDocument();
	});
	it("should Call the setMocks function when clicked", () => {
		const btn = screen.getByRole("button");

		userEvent.click(btn);
		expect(setMocks).toHaveBeenCalledTimes(2);
	});
});
