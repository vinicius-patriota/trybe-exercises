import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import { createStore, combineReducers } from 'redux';
import clickReducer from '../redux/reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }>{ component }</Provider>),
    store,
  }
}

describe('Testing Clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);

    const buttonAdicionar = queryByText('Clique aqui');
    const numberClicks = queryByText('0');

    expect(buttonAdicionar).toBeInTheDocument;
    expect(numberClicks).toBeInTheDocument;
  });

  test('A click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />);

    const buttonAdicionar = queryByText('Clique aqui');
    let numberClicks = queryByText('0');
    expect(numberClicks.textContent).toBe('0');

    fireEvent.click(buttonAdicionar);

    expect(numberClicks.textContent).toBe('1');
  });
});
