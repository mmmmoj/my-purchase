import React from 'react';
import { render, screen } from '@testing-library/react';
import { PurchaseCard } from './Card';

test('Test Purchasecard component', () => {
  const mockedPurchase = {
    id: 5,
    location: 'https://picsum.photos/id/4/200',
    purchaseDate: '2020-12-31T00:00:00.000Z',
    category: 'Entertainment',
    description: 'Use the virtual PCI microchip, then you can program the solid state bus!',
    price: 26829,
    name: '1080p overriding bus',
  };
  render(<PurchaseCard {...mockedPurchase} />);

  const description = screen.getByTestId(`card-description-${mockedPurchase.id}`);
  expect(description).toBeInTheDocument();
  expect(description).toHaveTextContent(mockedPurchase.description);
});
