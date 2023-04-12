import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { useDebateContext } from '../pages/DebateContext';
import { topics } from './lists';
import { TopicBox } from './TopicBox';

export const Topics = () => {
  const { step, topic, setTopic, setStep } = useDebateContext();

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
