import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductImage } from './ProductImage';

test('Test ProductImage component', () => {
  render(<ProductImage src={'https://dummy.com/dummy.jpeg'} alt={'dummy'} />);
  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('src', 'https://dummy.com/dummy.jpeg');
  expect(logo).toHaveAttribute('alt', 'dummy');
});
