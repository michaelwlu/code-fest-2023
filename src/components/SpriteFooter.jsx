import React from 'react';
import { useDebateContext } from '../pages/DebateContext';

export const SpriteFooter = () => {
  const { personOne, personTwo } = useDebateContext();

  return (
    <>
      {/* First Person */}
      <div
        style={{
          background: `url(/sprites/${personOne?.sprite}) no-repeat center center`,
          backgroundSize: 'contain',
          width: '200px',
          height: '500px',
        }}
      >
        hello
      </div>

      {/* Second Person */}
      <div></div>
    </>
  );
};
