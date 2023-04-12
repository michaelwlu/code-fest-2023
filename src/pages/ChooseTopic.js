import { Topics } from '@/components/Topics';
import React from 'react';
import { useDebateContext } from './DebateContext';

const ChooseTopic = () => {
  const { step, topic, setStep } = useDebateContext();

  const handleGo = () => {
    if (topic) {
      setStep(2);
    }
  };

  return step === 1 ? (
    <>
      <section>
        <Topics></Topics>
      </section>
      <footer>
        <button onClick={handleGo}>Go</button>
      </footer>
    </>
  ) : null;
};

export default ChooseTopic;
