import { useState } from 'react';
import { IGuild } from '../../interfaces/IGuild.ts';
import { getGuilds } from '../../api/interfaces/guilds/getGuilds.ts';

function useServerSelector() {
  const [guilds, setGuilds] = useState<IGuild[]>();

  getGuilds().then(response => {
    console.log('guilds', response.data);
    setGuilds(response.data);
  });

  return { guilds };
}

export default useServerSelector;