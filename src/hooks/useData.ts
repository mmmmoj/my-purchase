import { useState } from 'react';
import { Purchase } from '../types/purchase';
import { axios, extractApiErrorMessage } from '../utils/axios';

export const useData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<Purchase[]>([]);

  const fetchList = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await axios.get('data.json');
      setData(res.data);
    } catch (err: any) {
      setError(extractApiErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchList,
    resetError: () => setError(''),
  };
};
