import React, { useState } from 'react';
import { useChatGPTMutation } from '@/api/mutations/useChatGPTMutation';
import { useDebateContext } from '../pages/DebateContext';

export const Conversation = () => {
  const debateContext = useDebateContext();
  const { mutateAsync } = useChatGPTMutation();

  //determines who's turn it is
  const [turn, setTurn] = useState(debateContext.personTwo.name);
  const [debateStarted, setDebateStarted] = useState(false);
  //stores all messages
  const [chatLog, setChatLog] = useState([]);
  //stores last response to be used as prompt. inits as topic
  const [lastMessage,setLastMessage]=useState(debateContext.topic)

  const leftbubble = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 9999,
    width:'40%'
  };

  const rightbubble = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 9999,
    width:'40%'
  };

  const topicbubble = {
    position: 'fixed',
    bottom: '40px',
    right: '30%',
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    borderRadius: '10px',
    zIndex: 9999,
    width:'40%'
  }


  const quoteTextStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign:'center'
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '50%',
  }


  //determines who's turn it is. turn starts as person 1
  const handleTurn = async () => {
    turn === debateContext.personOne.name
      ? setTurn(debateContext.personTwo.name)
      : setTurn(debateContext.personOne.name);
  };

  const handleClick = async () => {
    const response = await mutateAsync({
      prompt: lastMessage,
      personality: turn,
    });
    console.log('response: ', response.data.choices[0].message.content);
    //set last response as new prompt
    setLastMessage(response.data.choices[0].message.content);
    //add response to chat log
    let newChatEntry = {
      person: turn,
      message: response.data.choices[0].message.content,
    };
    setChatLog([...chatLog, newChatEntry]);
    console.log(chatLog);
    //change turns
    handleTurn();
    setDebateStarted(true);
  };

  const elementsArray = chatLog.map((element, index) => {
    return (
      <>
        <p key={index}>{element.person}</p>
        <p key={index}>{element.message}</p>
      </>
    );
  });

  return(
  <>
    {debateStarted === true ? 
    <div style={turn === debateContext.personOne.name ? rightbubble:leftbubble}>
      <div variant="body1" style={quoteTextStyle}>
        {lastMessage}
      </div>
    </div> : null}
    <div style={topicbubble}>
      <div variant="body1" style={quoteTextStyle}>
        {debateContext.topic}
      </div>
    </div>
        <button style={buttonStyle}  onClick={handleClick}>Next!</button>
  </>)
};
