import React from 'react';
import { render, screen } from '@testing-library/react';
import { Category } from './Category';
import { categoryColor } from '../../utils/category-colors';

test('render Category component', () => {
  render(<Category name="Footwear" />);
  const footwearElement = screen.getByText(/Footwear/i);
  expect(footwearElement).toBeInTheDocument();
  expect(footwearElement).toHaveClass('category');
  expect(footwearElement).toHaveStyle(`borderColor: ${categoryColor('Footwear')}`);
});
