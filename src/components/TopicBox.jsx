import React from 'react';
import { useDebateContext } from '../pages/DebateContext';

export const TopicBox = () => {
  const { setTopic } = useDebateContext();

  const typeTopic = (t) => {
    setTopic(t);
  };
  return (
    <>
      <textarea
        onChange={(e) => typeTopic(e)}
        placeholder="...or make your own"
        className="topicInput"
      ></textarea>
    </>
  );
};
