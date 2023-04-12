import axios from 'axios';

export const getChatGPTResponse = (data) => {
  const openaiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const message = ` respond to this message as ${data.personality} : ${data.prompt}`;
  console.log('awaiting response');
  console.log(message);
  return axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 200,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiKey}`,
      },
    }
  );
};
