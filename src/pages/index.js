import { Conversation } from '@/components/Conversation';
import { Personalities } from '@/components/Personalities';
import { TopicBox } from '@/components/TopicBox';
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
      <h1>Test App Name</h1>

      {/* Select Profile Section */}
      <section>
        <Personalities></Personalities>
      </section>

      <section>
        <TopicBox></TopicBox>
      </section>

      <section>
        <Conversation></Conversation>
      </section>
    </div>
  );
}
