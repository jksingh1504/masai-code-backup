const tax = require("./tax_calculator");

describe("tax calculator", () => {
	test("below 250000 income", () => {
		expect(tax(249999)).toBe(0);
	});
	test("between 250000 & 500000 income", () => {
		expect(tax(250001)).toBe(0.05 * 250001);
	});
	test("between 500000 & 1000000 income", () => {
		expect(tax(500000)).toBe(0.12 * 500000);
	});
	test("above 1000000 income", () => {
		expect(tax(1000000)).toBe(0.27 * 1000000);
	});
	test("check for cap above 50000",()=>{
	    expect(tax(2000000)).toBe(0.3*2000000-50000)
	})
	test("between 250000 & 500000 income",()=>{
	    expect(tax(499999)).toBe(0.05*499999)
	})
    test("between 500000 & 1000000 income", () => {
		expect(tax(999999)).toBe(0.12 * 999999);
	});
    test("above 1000000 income", () => {
		expect(tax(1100000)).toBe(0.27 * 1100000);
	});
});
