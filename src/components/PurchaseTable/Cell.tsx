import React, { FunctionComponent } from 'react';
import { ProductImage } from '../ProductImage/ProductImage';
import { format } from '../../utils/date';
import { Category } from '../Category/Category';

export interface TableCellProps {
  text: string | number;
  alt?: string;
  alignment?: string;
  isImage?: boolean;
  isDate?: boolean;
  isCurrency?: boolean;
  isCategory?: boolean;
  isMenu?: boolean;
  width?: number;
}

export const Cell: FunctionComponent<TableCellProps> = ({
  text,
  isImage,
  width,
  alt,
  isCurrency,
  isDate,
  isCategory,
  isMenu,
  alignment,
}) => {
  let content: any = text;
  if (isImage && typeof text === 'string') {
    content = <ProductImage src={text} alt={alt} />;
  } else if (isCurrency && typeof text === 'number') {
    content = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(text);
  } else if (isDate && typeof text === 'string') {
    content = format(text);
  } else if (isCategory && typeof text === 'string') {
    content = <Category name={text} />;
  } else if (isMenu) {
    content = <span>&#8942;</span>;
  }
  const style: any = { fontWeight: 600 };
  if (width) {
    style.maxWidth = width;
  }
  if (alignment) {
    style.textAlign = alignment;
  }

  return <td style={style}>{content}</td>;
};
