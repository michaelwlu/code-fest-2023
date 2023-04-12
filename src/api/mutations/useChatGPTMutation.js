import { useMutation } from 'react-query';
import { getChatGPTResponse } from '../chatgpt';

export const useChatGPTMutation = () => {
  return useMutation(getChatGPTResponse);
};
