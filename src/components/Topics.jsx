import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { useDebateContext } from '../pages/DebateContext';
import { topics } from './lists';

export const Topics = (props) => {
  const { onClick } = props;
  const { step, topic, setTopic, setStep } = useDebateContext();

  return (
    <>
      <div class="topicsContainer">
        {topics.map((e) => {
          return (
            <div
              onClick={() => onClick(e)}
              class={`topicBox ${topic === e ? 'borderBlue' : ''}`}
            >
              {e.topic}
            </div>
          );
        })}
      </div>
    </>
  );
};
