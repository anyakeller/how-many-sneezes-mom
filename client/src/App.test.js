import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('verifies something', () => {
  const { getByText } = render(<App />);
  const yeet = getByText("YEET");
  expect(yeet).toBeInTheDocument();
});
