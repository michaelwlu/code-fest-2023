import { Conversation } from '@/components/Conversation';
import React from 'react';
import { useDebateContext } from './DebateContext';

const StartConversation = () => {
  const { step } = useDebateContext();

  return step === 3 ? (
    <>
      <section>
        <Conversation></Conversation>
      </section>
    </>
  ) : null;
};

export default StartConversation;
