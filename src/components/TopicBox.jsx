import React from 'react';
import { useDebateContext } from '../pages/DebateContext';

export const TopicBox = () => {
  const { topic, setTopic } = useDebateContext();

  const typeTopic = (t) => {
    setTopic(t);
  };

  return (
    <>
      <textarea
        value={topic}
        onChange={(e) => typeTopic(e.target.value)}
        placeholder="...or make your own"
        className="topicInput"
      ></textarea>
    </>
  );
};
