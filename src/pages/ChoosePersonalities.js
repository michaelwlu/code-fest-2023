import React, { useState } from 'react';
import { useDebateContext } from './DebateContext';
import { Personalities } from '@/components/Personalities';
import { TopicBox } from '@/components/TopicBox';

const ChoosePersonalities = () => {
  const { step, personOne, setPersonOne, setPersonTwo, personTwo, setStep } =
    useDebateContext();
  const [count, setCount] = useState(0);

  const handleNext = () => {
    if (personOne && personTwo) {
      setStep(1);
    }
  };

  const handlePersonalityClick = (person) => {
    if (!personOne) {
      setPersonOne(person);
    } else if (!personTwo) {
      setPersonTwo(person);
    }
    alert(personOne);
  };

  return step === 0 ? (
    <>
      <section>
        <Personalities
          onClick={(e) => handlePersonalityClick(e)}
        ></Personalities>
      </section>

      <footer>
        <button onClick={handleNext}>Next</button>
      </footer>
    </>
  ) : null;
};

export default ChoosePersonalities;
