import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const start = async () => {
      console.log('starting up...');
      //test entry point here
    };
    start();
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}
