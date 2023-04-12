import { Conversation } from '@/components/Conversation';
import { Personalities } from '@/components/Personalities';
import { TopicBox } from '@/components/TopicBox';
import { Topics } from '@/components/Topics';
import { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState();

  useEffect(() => {
    const start = async () => {
      console.log('starting up...');
      //test entry point here
    };
    start();
  }, []);

  const handleNext = () => {
    if (users.length >= 2) {
      setStep(2);
    }
  };

  const handleGo = () => {
    if (topic) {
      setStep(3);
    }
  };

  return (
    <div className="App">
      <h1>Test App Name</h1>

      {/* Select Profile Section */}
      {step === 1 ? (
        <>
          <section>
            <Personalities></Personalities>
          </section>

          <section>
            <TopicBox></TopicBox>
          </section>

          <footer>
            <button onClick={handleNext()}>Next</button>
          </footer>
        </>
      ) : null}

      {step === 2 ? (
        <>
          <section>
            <Topics></Topics>
          </section>
          <footer>
            <button onClick={handleGo()}>Go</button>
          </footer>
        </>
      ) : null}

      {step === 3 ? (
        <>
          <section>
            <Conversation></Conversation>
          </section>
        </>
      ) : null}
    </div>
  );
}
