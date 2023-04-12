import { Topics } from '@/components/Topics';
import React from 'react';
import { useDebateContext } from './DebateContext';

const ChooseTopic = () => {
  const { step, topic, setTopic, setStep } = useDebateContext();

  const handleGo = () => {
    console.log(topic.topic);
    if (topic) {
      setStep(2);
    }
  };

  const handleTopicClick = (e) => {
    if (!topic) {
      setTopic(e);
    } else if (topic && topic.topic !== e.topic) {
      setTopic(e);
    } else if (topic && topic.topic === e.topic) {
      setTopic('');
    }
  };

  return step === 1 ? (
    <>
      <section>
        <Topics onClick={(e) => handleTopicClick(e)}></Topics>
      </section>

      <h3 class="centerHeader">Choose your topic</h3>

      <footer>
        <button onClick={handleGo}>Go</button>
      </footer>
    </>
  ) : null;
};

export default ChooseTopic;
