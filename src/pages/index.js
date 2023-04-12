import { Conversation } from '@/components/Conversation';
import { Personalities } from '@/components/Personalities';
import { TopicBox } from '@/components/TopicBox';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const start = async () => {
      console.log('starting up...');
      //test entry point here

      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          prompt: `how is the weather in new york today?"`,
          model: 'text-davinci-002',
          max_tokens: 50,
          n: 1,
          stop: '.',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`,
          },
        }
      );
      console.log('response: ', response.data.choices[0].text);
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
