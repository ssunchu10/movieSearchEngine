import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import MovieCard from "./MovieCard";

describe("MovieCard Component", () => {
  const cloneData = {
    popularity: 8.5,
    title: "Sample-Movie",
    overview: "This is a sample movie overview",
    posterPath: "/sample-poster-path.jpg",
  };
  test("renders the movie card component with correct data", () => {
    render(<MovieCard {...cloneData} />);

    expect(screen.getByText(cloneData.title)).toBeInTheDocument();
    expect(screen.getByText(cloneData.overview)).toBeInTheDocument();
    expect(
      screen.getByText(`Rating: ${cloneData.popularity}`)
    ).toBeInTheDocument();

    const movieImage = screen.getByAltText("Image Unavailable");
    expect(movieImage).toHaveAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${cloneData.posterPath}`
    );
  });

  test("handles image error by displaying alternative image", async () => {
    const { container } = render(
      <MovieCard {...cloneData} posterPath={null} />
    );
    // get img element
    const imgEl = container.querySelector("img");
    // simulate error event on element
    fireEvent.error(imgEl, {
      target: imgEl,
    });
    await waitFor(() => {
      expect(imgEl.src).toEqual(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEnIvoqFQz-_nzodrgFhq7y6eN4yJoQVZ4g&usqp=CAU"
      );
    });
  });
});
