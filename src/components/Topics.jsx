import React, { useEffect, useState, Fragment, useCallback } from 'react';
import { useDebateContext } from '../pages/DebateContext';
import { topics } from './lists';

export const Topics = (props) => {
  const { onClick } = props;
  const { step, topic, setStep } =
    useDebateContext();

  return (
    <>
      <div class="topicsContainer">
        {topics[0].map((topic) => {
          return (
            <div

            >
              {topic.topic}
            </div>
          );
        })}
      </div>
    </>
  );
};
