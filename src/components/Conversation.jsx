import React, { useState } from 'react';
import { useChatGPTMutation } from '@/api/mutations/useChatGPTMutation';


export const Conversation = () => {
  
  const person1 = 'eminem';
  const person2 = 'beyonce';
  const topic = 'is climit change important?';
  const { mutateAsync } = useChatGPTMutation();

  //determines who's turn it is
  const [turn, setTurn] = useState(person1);
  //stores all messages
  const [chatLog, setChatLog]=useState([])
  //stores last response to be used as prompt. inits as topic
  const [lastMessage,setLastMessage]=useState(topic)


  //determines who's turn it is. turn starts as person 1
  const handleTurn = async () =>{
    turn === person1? setTurn(person2):setTurn(person1)
  }

  
  const handleClick = async() => {
    const response = await mutateAsync({
      prompt: lastMessage,
      personality: turn,
    });
    console.log('response: ', response.data.choices[0].message.content);
    setLastMessage(response.data.choices[0].message.content)
    handleTurn()
  };
  return(
  <>
    <h1>test</h1>
    <button onClick={handleClick}>test</button>
  </>);
};
