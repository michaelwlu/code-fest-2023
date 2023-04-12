import React from 'react';
import { useDebateContext } from './DebateContext';
import { Personalities } from '@/components/Personalities';
import { TopicBox } from '@/components/TopicBox';

const ChoosePersonalities = () => {
  const { step, users, setStep } = useDebateContext();

  const handleNext = () => {
    if (users.length >= 2) {
      setStep(2);
    }
  };

  return step === 1 ? (
    <>
      <section>
        <Personalities onClick={() => handlePersonalityClick()}></Personalities>
      </section>

      <section>
        <TopicBox></TopicBox>
      </section>

      <footer>
        <button onClick={handleNext}>Next</button>
      </footer>
    </>
  ) : null;
};

export default ChoosePersonalities;
