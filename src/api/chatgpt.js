import axios from 'axios';

export const getChatGPTResponse = (prompt) => {
  const openaiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  return axios.post(
    'https://api.openai.com/v1/completions',
    {
      prompt,
      model: 'text-davinci-002',
      max_tokens: 50,
      n: 1,
      stop: '.',
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openaiKey}`,
      },
    }
  );
};
