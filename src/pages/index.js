import { Conversation } from '@/components/Conversation';
import { Personalities } from '@/components/Personalities';
import { TopicBox } from '@/components/TopicBox';
import { Topics } from '@/components/Topics';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useChatGPTMutation } from '@/api/mutations/useChatGPTMutation';
import { DebateProvider } from './DebateContext';
import ChoosePersonalities from './ChoosePersonalities';
import ChooseTopic from './ChooseTopic';
import StartConversation from './StartConversation';

export default function Home() {
  const { mutateAsync } = useChatGPTMutation();

  useEffect(() => {
    const start = async () => {
      console.log('starting up...');
      //test entry point here

      // const response = await mutateAsync({
      //   prompt: 'how do we improve civil rights?',
      //   personality: 'eminem',
      // });

      // console.log('response: ', response.data.choices[0].message.content);
    };
    start();
  }, []);

  return (
    <DebateProvider>
      <div className="App">
        <h1>Test App Name</h1>

        <ChoosePersonalities />

        <ChooseTopic />

        <StartConversation />
      </div>
    </DebateProvider>
  );
}
