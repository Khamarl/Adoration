const { showHowMuchILoveYou } = require("./adoration");

describe("showHowMuchILoveYou", () => {
    it('exists', () => {
        expect(showHowMuchILoveYou).toBeDefined();
    });
    it("Is a function ", () => {
        expect(showHowMuchILoveYou instanceof Function).toEqual(true)
    });
    it("returns a string with correct number of i", () => {
        expect(showHowMuchILoveYou(5)).toBe("I love you thiiiiis much")
    });
    it("Throws an error passed a string", () => {
        expect(() => {
            showHowMuchILoveYou('with all my heart')
    }).toThrow(new Error('I am emotionally unavailable, sorry.'))
})
})
