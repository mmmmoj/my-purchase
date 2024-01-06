import { Purchase } from '../../types/purchase';
import React, { FunctionComponent, useCallback, useMemo } from 'react';
import './Pagination.css';

export interface PaginationProps {
  activePage: number;
  onPaginate: (page: number) => void;
  totalPages: number;
}

export const Pagination: FunctionComponent<PaginationProps> = ({ activePage, totalPages, onPaginate }) => {
  const hasPreviousPage = useMemo(() => totalPages > 1 && activePage > 1, [totalPages, activePage]);
  const hasNextPage = useMemo(() => totalPages > 1 && activePage < totalPages, [totalPages, activePage]);

  const changePage = useCallback((e: any, page: number) => {
    e.preventDefault();
    if (onPaginate) {
      onPaginate(page);
    }
  }, []);

  return (
    <div className="pagination">
      <a className={hasPreviousPage ? '' : 'disabled'} href="#" onClick={(e) => changePage(e, activePage - 1)}>
        &laquo;
      </a>
      {new Array(totalPages).fill('').map((_, i) => (
        <a key={i} href="#" className={activePage === i + 1 ? 'active' : ''} onClick={(e) => changePage(e, i + 1)}>
          {i + 1}
        </a>
      ))}
      <a className={hasNextPage ? '' : 'disabled'} href="#" onClick={(e) => changePage(e, activePage + 1)}>
        &raquo;
      </a>
    </div>
  );
};
