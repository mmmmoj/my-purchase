import React, { FunctionComponent } from 'react';
import { Purchase } from '../../types/purchase';
import { PurchaseCard } from '../PurchaseCard/Card';
import './PurchaseList.css';
import { Purchasecaption } from '../PurchaseCaption/PurchaseCaption';

export const PurchaseList: FunctionComponent<{ list: Purchase[] }> = ({ list }) => {
  return (
    <div className={'purchaseListContainer'}>
      <div className="purchaseListCaptionContainer">
        <Purchasecaption />
      </div>
      <ul>
        {(!list || list.length === 0) && <li>No Data</li>}
        {list.map((purchase) => (
          <li key={purchase.id}>
            <PurchaseCard {...purchase} />
          </li>
        ))}
      </ul>
    </div>
  );
};
