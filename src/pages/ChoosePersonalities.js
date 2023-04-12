import React from 'react';
import { useDebateContext } from './DebateContext';
import { Personalities } from '@/components/Personalities';
import { Button } from '@mui/material';

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

      <h3 class="centerHeader">Choose your fighters</h3>

      <footer class="stepFooter">
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </footer>
    </>
  ) : null;
};

export default ChoosePersonalities;
