import React from 'react';
import { Personalities } from '@/components/Personalities';
import { useDebateContext } from './DebateContext';

const ChoosePersonalities = () => {
  const { step, personOne, setPersonOne, setPersonTwo, personTwo, setStep } =
    useDebateContext();

  const handleNext = () => {
    if (personOne && personTwo) {
      setStep(1);
    }
  };

  const handlePersonalityClick = (person) => {
    console.log(person);
    if (!personOne && person.name !== personTwo?.name) {
      setPersonOne(person);
    } else if (personOne?.name === person.name) {
      setPersonOne(null);
    } else if (!personTwo) {
      setPersonTwo(person);
    } else if (personTwo?.name === person.name) {
      setPersonTwo(null);
    }
  };

  return step === 0 ? (
    <>
      <section>
        <Personalities
          onClick={(e) => handlePersonalityClick(e)}
        ></Personalities>
      </section>

      <h3 className="centerHeader">Choose your fighters</h3>

      <footer className="stepFooter">
        {personOne && personTwo && (
          <button className="stepButton" onClick={handleNext}>
            Next
          </button>
        )}
      </footer>
    </>
  ) : null;
};

export default ChoosePersonalities;
