import { pageArray } from "./index";

describe("Testing Page Array Util", () => {
  it("should return an array with grouped pages based on the size of the array", () => {
    const totalPages = 10;
    const arraySize = 3;
    const result = pageArray(totalPages, arraySize);
    expect(Array.isArray(result)).toBe(true); //test karo ki result is an array
    expect(result.length).toEqual(Math.ceil(totalPages / arraySize)); // test karo ki result ki length totalPages divide by arraySize hai
  });

  it("should handle times where totalPages is less than arraySize", () => {
    const totalPages = 5;
    const arraySize = 10;
    const result = pageArray(totalPages, arraySize);
    expect(Array.isArray(result)).toBe(true); //test karo ki result is an array
    expect(result.length).toBe(1);
    expect(result[0].length).toBe(totalPages); //test karo ki result ki 0th index ki length totalPages jitni hai
  });

  it("Checking the page array util for the length is greater then 0", () => {
    const totalPages = 0;
    const arraySize = 3;
    const result = pageArray(totalPages, arraySize);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
});
