import { useState } from 'react';
import { Guild } from '../../api/interfaces/guilds/response/Guild.ts';
import { getGuilds } from '../../api/interfaces/guilds/request/getGuilds.ts';

function useServerSelector() {
  const [guilds, setGuilds] = useState<Guild[]>();

  getGuilds().then(response => setGuilds(response.data));

  return { guilds };
}

export default useServerSelector;