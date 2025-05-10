import { alovaInstance } from '../../core/alova.ts';
import { IGameResponse } from './response/IGameResponse.ts';
import { API_URL } from '../../../constants.ts';

export const getGames = async (): Promise<IGameResponse> => {
  return alovaInstance.Get(`${API_URL}/games`, {
    cacheFor: 60000,
  });
};