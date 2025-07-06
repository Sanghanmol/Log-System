import React from 'react';

export default function LogList({ logs }) {
  if (!logs.length) return <p>No logs found.</p>;

  return (
    <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
      <ul className="list-group">
        {logs.map((log, idx) => (
          <li
            key={idx}
            className="list-group-item d-flex justify-content-between align-items-start border-start border-5 mb-2"
            style={{ borderColor: getColor(log.level) }}
          >
            <div>
              <div>
                <strong>[{log.level.toUpperCase()}]</strong> {log.message}
              </div>
              <small className="text-muted">
                {new Date(log.timestamp).toLocaleString()} | {log.resourceId}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getColor(level) {
  switch (level) {
    case 'error': return 'red';
    case 'warn': return 'orange';
    case 'info': return 'blue';
    case 'debug': return 'grey';
    default: return 'black';
  }
}
