import { useEffect, useState } from 'react';
import { fetchLogs } from '../services/api';

export const useLogs = (filters) => {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchLogs(filters).then(res => setLogs(res.data));
    }, 300);
    return () => clearTimeout(timeout);
  }, [filters]);

  return logs;
};