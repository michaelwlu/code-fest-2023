import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { useDebateContext } from '../pages/DebateContext';
import { topics } from './lists';

export const Topics = () => {
  const { step, topic, setTopic, setStep } = useDebateContext();

  const handleTopicClick = (question) => {
    if (!topic) {
      setTopic(question);
    } else if (topic && topic !== question) {
      setTopic(question);
    } else if (topic && topic === question) {
      setTopic(null);
    }
  };

  return (
    <>
      <div class="topicsContainer">
        {topics.map((e) => {
          return (
            <div
              onClick={() => handleTopicClick(e.question)}
              class={`topicBox ${topic === e.topic ? 'borderBlue' : ''}`}
            >
              {e.topic}
            </div>
          );
        })}
      </div>
    </>
  );
};
