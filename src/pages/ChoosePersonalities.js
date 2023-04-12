import React, { useState } from 'react';
import { useDebateContext } from './DebateContext';
import { Personalities } from '@/components/Personalities';
import { TopicBox } from '@/components/TopicBox';

const ChoosePersonalities = () => {
  const { step, personOne, setPersonOne, setPersonTwo, personTwo, setStep } =
    useDebateContext();

  const handleNext = () => {
    if (personOne && personTwo) {
      setStep(1);
    }
  };

  const handlePersonalityClick = (person) => {
    if (!personOne && !personTwo) {
      setPersonOne(person);
    } else if (personOne === person) {
      setPersonOne('');
    } else if (!personTwo) {
      setPersonTwo(person);
    } else if (personTwo === person) {
      setPersonTwo('');
    }
  };

  return step === 0 ? (
    <>
      <section>
        <Personalities
          onClick={(e) => handlePersonalityClick(e)}
        ></Personalities>
      </section>

      <h3 class="centerHeader">Choose your fighters</h3>

      <footer class="stepFooter">
        <button class="stepButton" onClick={handleNext}>
          Next
        </button>
      </footer>
    </>
  ) : null;
};

export default ChoosePersonalities;
