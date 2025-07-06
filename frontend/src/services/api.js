import axios from 'axios';

const BASE_URL = import.meta.env.PROD
  ? '/logs'
  : 'http://localhost:8080/logs';

export const fetchLogs = (params) => axios.get(BASE_URL, { params });
export const postLog = (log) => axios.post(BASE_URL, log);
