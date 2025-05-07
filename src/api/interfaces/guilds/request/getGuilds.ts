import { alovaInstance } from '../../../core/alova.ts';
import { Guild } from '../response/Guild.ts';
import { API_URL } from '../../../../constants.ts';

export const getGuilds = async (): Promise<GuildResponse> => {
  return alovaInstance.Get(`${API_URL}/guilds`, {
    cacheFor: 60000
  });
};

export interface GuildResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: Guild[];
}