import { alovaInstance } from '../../core/alova.ts';
import { API_URL } from '../../../constants.ts';
import { IResponse } from '../IResponse.ts';

export const updateGameSubscription = async (guildId: string, gameId: number): Promise<IResponse<void>> => {
  return alovaInstance.Post(`${API_URL}/guilds/${guildId}/games/${gameId}/toggle`);
};

export default { updateGameSubscription };