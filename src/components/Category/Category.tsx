import React, { FunctionComponent } from 'react';
import { categoryColor } from '../../utils/category-colors';
import './Category.css';

export interface CategoryProps {
  name: string;
}

export const Category: FunctionComponent<CategoryProps> = ({ name }) => {
  const style = {
    color: categoryColor(name),
    borderColor: categoryColor(name),
  };
  return (
    <p className="category">
      <div style={style}>
        <strong>{name}</strong>
      </div>
    </p>
  );
};
