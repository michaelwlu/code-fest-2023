import LeftPanel from '@/components/LeftPanel/LeftPanel';
import NavBar from '@/components/NavBar/NavBar';
import RightPanel from '@/components/RightPanel/RightPanel';
import { TestComponent } from '@/components/TestComponent/TestComponent';
import { OnInit } from '@/utilities/AppInit';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const start = async () => {
      await OnInit();

      await axios.get('http://localhost:3001/users').then((response) => {
        setUsers(response.data);
      });
    };
    start();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <LeftPanel>
        <h1>Panel Title</h1>
        <p>Panel content goes here</p>
      </LeftPanel>
      <RightPanel>
        <h1>Panel Title</h1>
        <p>Panel content goes here</p>
      </RightPanel>
      <TestComponent />

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
