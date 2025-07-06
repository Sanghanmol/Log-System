import React, { useState } from 'react';
import Filters from './components/Filters';
import LogList from './components/LogList';
import { useLogs } from './hooks/useLogs';

export default function App() {
  const [filters, setFilters] = useState({});
  const logs = useLogs(filters);

  return (
    <div className="container py-5">
      <div className="mb-5 text-center">
        <h1 className="display-5 fw-bold text-primary">Log Ingestion Dashboard</h1>
        <p className="lead text-muted">Search and filter logs in real time</p>
      </div>

      <div className="card shadow-sm mb-4 p-3">
        <h4 className="mb-3">Filters</h4>
        <Filters filters={filters} onChange={setFilters} />
      </div>

      <div className="card shadow-sm p-3">
        <h4 className="mb-3">Log Results</h4>
        {logs.length === 0 ? (
          <p className="text-muted">No logs found for the selected filters.</p>
        ) : (
          <LogList logs={logs} />
        )}
      </div>
    </div>
  );
}
