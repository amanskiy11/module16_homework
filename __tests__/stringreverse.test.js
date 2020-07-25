import { toReverse } from "../stringreverse";

describe('string reverse test', () => {
    it('Hello string reverse', () => {
        const result = toReverse('Hello');
        expect(result).toBe('olleH')
    })
})