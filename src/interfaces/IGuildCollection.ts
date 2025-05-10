import { IGuild } from './IGuild.ts';

export interface IGuildCollection {
  label: string;
  value: string;
}

export function GuildToGuildCollection(guild: IGuild): IGuildCollection {
  return {
    label: guild.channel_id,
    value: guild.id,
  };
}
