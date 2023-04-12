import React from 'react';
import { topics } from './lists';
import { TopicBox } from './TopicBox';
import { useDebateContext } from './DebateContext';

export const Topics = () => {
  const { topic, setTopic } = useDebateContext();

  const handleTopicClick = (question) => {
    if (!topic) {
      setTopic(question);
    } else if (topic && topic !== question) {
      setTopic(question);
    } else if (topic && topic === question) {
      setTopic('');
    }
  };

  return (
    <>
      <div className="topicsContainer">
        {topics.map((e) => {
          return (
            <div
              onClick={() => handleTopicClick(e.question)}
              className={`topicBox ${topic === e.question ? 'borderBlue' : ''}`}
            >
              <span className="topicText">{e.topic}</span>
            </div>
          );
        })}

        <h3 className="centerHeader">Choose your topic</h3>

        <TopicBox></TopicBox>
      </div>
    </>
  );
};
