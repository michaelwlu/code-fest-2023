import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useChatGPTMutation } from '@/api/mutations/useChatGPTMutation';

import ChoosePersonalities from '../components/ChoosePersonalities';

import StartConversation from '../components/StartConversation';
import { SpriteFooter } from '@/components/SpriteFooter';
import ChooseTopic from '@/components/ChooseTopic';
import { DebateProvider } from '@/components/DebateContext';
import Title from '@/components/Title';

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
        <Title />

        <ChoosePersonalities />

        <ChooseTopic />

        <StartConversation />

        <SpriteFooter />
      </div>
    </DebateProvider>
  );
}
