import React, { FunctionComponent } from 'react';
import { ProductImage } from '../ProductImage/ProductImage';
import { Purchase } from '../../types/purchase';
import { format } from '../../utils/date';
import './card.css';

export const PurchaseCard: FunctionComponent<Purchase> = ({ id, name, price, location, purchaseDate, description }) => {
  return (
    <div className="card">
      <header className="header">
        <section className="nameSection">
          <ProductImage src={location} alt={name} />
          <p className="name">{name}</p>
        </section>
        <p className="price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</p>
      </header>
      <section className="body">
        <p data-testid={`card-description-${id}`} className="description">
          {description}
        </p>
      </section>
      <footer className="footer">
        <p className="createdAtLabel">Purchased Date</p>
        <p className="createdAt">{format(purchaseDate, true)}</p>
      </footer>
    </div>
  );
};
