export const getMovieResult = async (query, pageNo) => {
  try {
    const getApiResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${pageNo}&api_key=210c1a86f52296d71c06efcbac38c0c7`
    );
    const jsonData = await getApiResponse.json();
    return jsonData;
  } catch (error) {
    console.log("In API response Error => ", error);
    return error;
  }
};
