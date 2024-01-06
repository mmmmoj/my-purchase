import React, { FunctionComponent } from 'react';
import { Purchase } from '../../types/purchase';
import { TableHeaderCell } from './Header';
import { Cell } from './Cell';
import { Purchasecaption } from '../PurchaseCaption/PurchaseCaption';
import './Table.css';

export interface PurchaseTableProps {
  data: Purchase[];
}

export const PurchaseTable: FunctionComponent<PurchaseTableProps> = ({ data }) => {
  return (
    <div className="container">
      <table>
        <Purchasecaption />
        <thead>
          <tr style={{ height: 50, borderBottomLeftRadius: 10 }}>
            <TableHeaderCell label="Name" width="200px" />
            <TableHeaderCell label="Location" width="100px" />
            <TableHeaderCell label="Purchased Date" />
            <TableHeaderCell label="Category" />
            <TableHeaderCell label="Description" width="200px" />
            <TableHeaderCell label="Price" />
            <TableHeaderCell label="" width={100} />
          </tr>
        </thead>
        <tbody>
          {(!data || data.length === 0) && (
            <tr>
              <td colSpan={7}>No Data</td>
            </tr>
          )}
          {data.map((entry) => (
            <tr key={entry.id}>
              <Cell text={entry.name} alignment="start" />
              <Cell text={entry.location} isImage alt={entry.name} />
              <Cell text={entry.purchaseDate} isDate />
              <Cell text={entry.category} isCategory />
              <Cell text={entry.description} alignment="start" />
              <Cell text={entry.price} isCurrency />
              <Cell text={''} isMenu />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
