import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import NavBar from './components/NavBar';

it('renders without crashing', () => {
  render(<App />);
});

test('Dashboard renders without crashing', () => {
  render(<NavBar />);
});

test('contains Players header text', () => {
  const container = render(<NavBar />);
  console.log(container);
  // Act - getting the node by text
  container.getByText(/Players/i);
});
