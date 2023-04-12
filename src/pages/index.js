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
import { SpriteFooter } from '@/components/SpriteFooter';
import { Box, Typography } from '@mui/material';

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
        <Box mt={2} ml={2}>
          <h1 style={{ color: 'white' }}>Epic Debate Battles</h1>
        </Box>

        <ChoosePersonalities />

        <ChooseTopic />

        <StartConversation />

        <SpriteFooter />
      </div>
    </DebateProvider>
  );
}
