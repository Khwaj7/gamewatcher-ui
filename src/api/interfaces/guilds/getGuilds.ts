import { alovaInstance } from '../../core/alova.ts';
import { API_URL } from '../../../constants.ts';
import { IGuildResponse } from './response/IGuildResponse.ts';

export const getGuilds = async (): Promise<IGuildResponse> => {
  return alovaInstance.Get(`${API_URL}/guilds`, {
    cacheFor: 60000
  });
};