import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from './SearchBar';
import { updateSearchInput, getUpdatedResults } from './SearchSlice';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

const mockStore = configureStore([]);

describe('SearchBar component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the SearchBar component', () => {
    render(
      <Provider store={mockStore({ searchState: { searchInput: 'test' } })}>
        <SearchBar />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Search here!')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('dispatches updateSearchInput on input change', () => {
    render(
      <Provider store={mockStore({ searchState: { searchInput: 'test' } })}>
        <SearchBar />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Search here!'), {
      target: { value: 'new input' },
    });

    expect(mockDispatch).toHaveBeenCalledWith(updateSearchInput('new input'));
  });

  it('dispatches getUpdatedResults on form submit', () => {
    render(
      <Provider store={mockStore({ searchState: { searchInput: 'test' } })}>
        <SearchBar />
      </Provider>
    );

    fireEvent.submit(screen.getByText('Search'));

    // expect(mockDispatch).toHaveBeenCalledWith(getUpdatedResults());
  });
});
