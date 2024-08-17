import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

const SecondPage = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const uartData = await invoke('get_uart_data');
      console.log('Fetched UART Data:', uartData);
      setData(JSON.stringify(uartData, null, 2));
      setError(null); // Clear previous errors if any
    } catch (err) {
      console.error('Failed to fetch UART data:', err);
      setError(err);
    }
  };

  return (
    <div>
      <h1>UART Data</h1>
      <button onClick={fetchData}>Fetch UART Data</button>
      {error && (
        <p style={{ color: 'red' }}>
          Error: {error.message ? error.message : 'An unknown error occurred'}
        </p>
      )}
      <pre>{data}</pre>
    </div>
  );
};

export default SecondPage;
