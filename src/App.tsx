import React, { useEffect } from 'react';
import './App.css';
import { PurchaseList, PurchaseTable, Pagination, Loading, Alert } from './components';
import { Purchase } from './types/purchase';
import { useData } from './hooks/useData';
import { usePagination } from './hooks/usePagination';

function App() {
  const { loading, data: list, error, fetchList, resetError } = useData();
  const { data, onPaginate, activePage, totalPages } = usePagination(list);

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      {error && <Alert message={error} onDismiss={resetError} />}
      <section className="mobileSection" data-testid="mobileSection">
        <PurchaseList list={data} />
      </section>
      <section className="disktopSection" data-testid="disktopSection">
        <PurchaseTable data={data as Purchase[]} />
      </section>
      <section className="pagination">
        <Pagination activePage={activePage} onPaginate={onPaginate} totalPages={totalPages} />
      </section>
    </div>
  );
}

export default App;
