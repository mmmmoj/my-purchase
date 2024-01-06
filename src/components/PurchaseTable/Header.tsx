import React, { FunctionComponent } from 'react';

export interface TableHeaderCellProps {
  label: string;
  width?: number | string;
}

export const TableHeaderCell: FunctionComponent<TableHeaderCellProps> = ({ label, width }) => {
  const style: any = {};
  if (width) {
    style.maxWidth = width;
    style.width = width;
  }
  return <th style={style}>{label}</th>;
};
