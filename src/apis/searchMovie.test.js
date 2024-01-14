import { getMovieResult } from "./searchMovie";

describe("Search Movie API", () => {
  window.fetch = jest.fn();

  it("SuccessI response ", async () => {
    const apiResponse = {
      results: [],
      total_pages: 10,
      total_results: 100,
    };
    await window.fetch.mockImplementation((apiUrl) => {
      expect(apiUrl).toEqual(
        "https://api.themoviedb.org/3/search/movie?query=test&page=0&api_key=210c1a86f52296d71c06efcbac38c0c7"
      );
      return Promise.resolve({
        json() {
          return apiResponse;
        },
      });
    });

    const fetchResponse = await getMovieResult("test", 0);
    console.log("Fetch response", fetchResponse);
    // expect(fetchResponse.after).toBe(3);
    // expect(fetchResponse.result).toHaveLength(0);
  });
});
