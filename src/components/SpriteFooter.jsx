import React from 'react';
import { useDebateContext } from '../pages/DebateContext';
import Image from 'next/image';

export const SpriteFooter = () => {
  const { personOne, personTwo } = useDebateContext();

  return (
    <>
      {/* First Person */}
      {/* <div
        style={{
          background: `url(/sprites/${personOne?.sprite}) no-repeat center center`,
          backgroundSize: 'contain',
          width: '200px',
          height: '500px',
        }}
      >
        hello
      </div> */}
      {personOne && (
        <div style={{ position: 'fixed', bottom: 30, left: 30 }}>
          <Image
            src={`/sprites/${personOne?.sprite}`}
            width="300"
            height="500"
          />
        </div>
      )}

      {/* Second Person */}
      {personTwo && (
        <div style={{ position: 'fixed', bottom: 30, right: 30 }}>
          <Image
            src={`/sprites/${personTwo?.sprite}`}
            width="300"
            height="500"
          />
        </div>
      )}
    </>
  );
};
