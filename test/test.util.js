import React from 'react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from 'reach/router';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

export function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}> {ui} </LocationProvider>),
    history,
  };
}
