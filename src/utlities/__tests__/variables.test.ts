import { checkResult, getStatus, randomlyGenerateXorO } from "../variables";


describe("Variables", () => {
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

	it("should test the checkResult", () => {
		expect(checkResult(["0", "1", "2"])).toEqual([["0", "1", "2"]]);
		expect(checkResult(["0", "1", "2", "3", "4", "5", "6", "7", "8"])).toEqual([
			["0", "1", "2"],
			["3", "4", "5"],
			["6", "7", "8"],
			["0", "3", "6"],
			["1", "4", "7"],
			["2", "5", "8"],
			["0", "4", "8"],
			["2", "5", "8"],
		]);
	});

    it("should test the randomlyGenerateXorO when returning O", () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
        expect(randomlyGenerateXorO()).toBe("O");
    })
    it("should test the randomlyGenerateXorO when returning X", () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0);
        expect(randomlyGenerateXorO()).toBe("X");
    })
    it("should return the cross array and circle array", () => {
        const { crossArray, circleArray } = getStatus("1", "X");
        expect(crossArray).toEqual(["1"]);
        expect(circleArray).toEqual([]);
        
    })
    it("should return the cross array and circle array", () => {
        const { crossArray, circleArray } = getStatus("1", "O");
        expect(crossArray).toEqual(["1"]);
        expect(circleArray).toEqual(["1"]);
        
    })
});
