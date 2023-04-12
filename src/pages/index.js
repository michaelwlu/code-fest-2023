import { OnInit } from '@/utilities/AppInit';
import { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const start = async () => {
      await OnInit();
    };
    start();
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}
