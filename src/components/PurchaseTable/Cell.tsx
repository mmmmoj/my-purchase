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
  isBold?: boolean;
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
  isBold,
  alignment,
}) => {
  let content: any = text;
  if (isImage && typeof text === 'string') {
    content = <ProductImage src={text} alt={alt} />;
  } else if (isCurrency && typeof text === 'number') {
    content = <strong>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(text)}</strong>;
  } else if (isDate && typeof text === 'string') {
    content = format(text);
  } else if (isCategory && typeof text === 'string') {
    content = <Category name={text} />;
  } else if (isMenu) {
    content = <span>&#8942;</span>;
  } else if (isBold) {
    content = <strong>{text}</strong>;
  }
  const style: any = {};
  if (width) {
    style.maxWidth = width;
  }
  if (alignment) {
    style.textAlign = alignment;
  }

  return <td style={style}>{content}</td>;
};
