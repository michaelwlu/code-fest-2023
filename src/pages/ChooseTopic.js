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

  const handleInputChange = (e) => {
    setTopic(e.target.value);
  };

  return step === 1 ? (
    <>
      <section>
        <Topics />
      </section>

      <h3 class="centerHeader">Choose your topic</h3>

      <input value={topic} onChange={handleInputChange} />

      <footer>
        <button onClick={handleGo}>Go</button>
      </footer>
    </>
  ) : null;
};

export default ChooseTopic;
