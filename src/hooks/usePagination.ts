import { Purchase } from '../types/purchase';
import { useMemo, useState } from 'react';
import { ITEM_PER_PAGE } from '../constants';

export const usePagination = (list: Purchase[]) => {
  const [activePage, setActivePage] = useState(1);

  const data = useMemo(() => {
    const val = activePage - 1;
    const start = ITEM_PER_PAGE * val;
    const end = start + ITEM_PER_PAGE;
    return list.slice(start, end);
  }, [list, activePage]);

  const totalPages = useMemo(() => Math.ceil(list.length / ITEM_PER_PAGE), [list]);

  return {
    data,
    activePage,
    totalPages,
    onPaginate: setActivePage,
  };
};
