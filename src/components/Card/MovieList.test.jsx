import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('MovieList Component', () => {
  test('renders MovieList component with correct movie data', () => {
    const initialState = {
      searchState: {
        searchResults: [
          {
            id: 1,
            popularity: 7.5,
            title: 'Movie 1',
            overview: 'Overview 1',
            poster_path: '/poster1.jpg',
          },
          {
            id: 2,
            popularity: 8.0,
            title: 'Movie 2',
            overview: 'Overview 2',
            poster_path: '/poster2.jpg',
          },
        ],
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MovieList />
      </Provider>
    );

    const movieTitles = screen.getAllByText(/Movie/i);
    expect(movieTitles.length).toBe(2);

    const movieOverviews = screen.getAllByText(/Overview/i);
    expect(movieOverviews.length).toBe(2);

    const movieImages = screen.getAllByAltText('Image Unavailable');
    expect(movieImages.length).toBe(2);

  });

});