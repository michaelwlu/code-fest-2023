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
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '350px',
            height: '500px',
          }}
        >
          <Image
            src={`/sprites/${personOne?.sprite}`}
            width="200"
            height="333"
          />
          <h1
            style={{ color: 'white', textAlign: 'center', background: 'black' }}
          >
            {personOne.name}
          </h1>
        </div>
      )}

      {/* Second Person */}
      {personTwo && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '350px',
            height: '500px',
          }}
        >
          <Image
            src={`/sprites/${personTwo?.sprite}`}
            width="200"
            height="333"
          />
          <h1
            style={{ color: 'white', textAlign: 'center', background: 'black' }}
          >
            {personTwo.name}
          </h1>
        </div>
      )}
    </>
  );
};
