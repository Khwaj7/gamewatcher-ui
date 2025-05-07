import { Guild } from '../api/interfaces/guilds/response/Guild.ts';

export interface IGuildCollection {
  label: string;
  value: string;
}

export function GuildToGuildCollection(guild: Guild): IGuildCollection {
  return {
    label: guild.channel_id,
    value: guild.id,
  };
}
