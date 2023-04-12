import React, { useEffect, useState, Fragment, useCallback } from 'react';

const persons = [
  { name: 'Person 1' },
  { name: 'Person 2' },
  { name: 'Person 3' },
  { name: 'Person 4' },
  { name: 'Person 5' },
  { name: 'Person 6' },
  { name: 'Person 7' },
  { name: 'Person 8' },
  { name: 'Person 9' },
  { name: 'Person 10' },
  { name: 'Person 11' },
  { name: 'Person 12' },
];

export const Personalities = (props) => {
  const { onClick } = props;

  return (
    <div class="personsContainer">
      {persons.map((person) => {
        return (
          <div onClick={() => onClick(person)} class="personBox">
            {person.name}
          </div>
        );
      })}
    </div>
  );
};
