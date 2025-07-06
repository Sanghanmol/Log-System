import React from 'react';

export default function Filters({ filters, onChange }) {
  return (
    <div className="row g-3 mb-4">
      <div className="col-md-3">
        <label className="form-label">Search Message</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. database error"
          onChange={e => onChange({ ...filters, search: e.target.value })}
        />
      </div>

      <div className="col-md-2">
        <label className="form-label">Log Level</label>
        <select
          className="form-select"
          onChange={e => onChange({ ...filters, level: e.target.value })}
        >
          <option value="">All</option>
          <option value="error">Error</option>
          <option value="warn">Warn</option>
          <option value="info">Info</option>
          <option value="debug">Debug</option>
        </select>
      </div>

      <div className="col-md-3">
        <label className="form-label">Resource ID</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. server-1234"
          onChange={e => onChange({ ...filters, resourceId: e.target.value })}
        />
      </div>

      <div className="col-md-2">
        <label className="form-label">Start Time</label>
        <input
          type="datetime-local"
          className="form-control"
          onChange={e => onChange({ ...filters, start: e.target.value })}
        />
      </div>

      <div className="col-md-2">
        <label className="form-label">End Time</label>
        <input
          type="datetime-local"
          className="form-control"
          onChange={e => onChange({ ...filters, end: e.target.value })}
        />
      </div>
    </div>
  );
}
