import { alovaInstance } from '../../core/alova.ts';
import { API_URL } from '../../../constants.ts';
import { IGuildGamesResponse } from '../games/response/IGameResponse.ts';
import { IGuildGamesRequest } from './request/IGuildGamesRequest.ts';

export const getGuildGames = async (props: IGuildGamesRequest): Promise<IGuildGamesResponse> => {
  return alovaInstance.Get(`${API_URL}/guilds/${props.guildId}/games`, {
    cacheFor: 60000,
  });
};