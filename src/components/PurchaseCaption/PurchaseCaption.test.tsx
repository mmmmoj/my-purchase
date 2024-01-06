import React from 'react';
import { render, screen } from '@testing-library/react';
import { Purchasecaption } from './PurchaseCaption';

test('Test Purchasecaption component', () => {
  render(<Purchasecaption />);
  const caption = screen.getByText(/Purchases/i);
  expect(caption).toBeInTheDocument();
});
