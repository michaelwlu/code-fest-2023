import { Topics } from '@/components/Topics';
import React from 'react';
import { useDebateContext } from './DebateContext';

const ChooseTopic = () => {
  const { step, topic, setTopic, setStep } = useDebateContext();

  const handleGo = () => {
    if (topic) {
      setStep(2);
    }
  };

  return step === 1 ? (
    <>
      <section>
        <Topics />
      </section>

      <footer className="stepFooter">
        <button className="stepButton" onClick={handleGo}>
          Go
        </button>
      </footer>
    </>
  ) : null;
};

export default ChooseTopic;
