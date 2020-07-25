import { getPercents } from "../zadanie2";

describe ('getPercents func test', () => {
    it('percent 30 of 200 equals 60', () => {
        const result = getPercents(30, 200);
        expect(result).toBe(60)
    });
    it('percent 0 of 0 equals 0', () => {
        const result = getPercents(0, 0);
        expect(result).toBe(0)
    });
    it('result NaN if missing argument', () => {
        const result = getPercents(30);
        expect(result).toBeNaN()
    });
})