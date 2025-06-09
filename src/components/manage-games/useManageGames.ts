import { IGame } from '../../interfaces/IGame.ts';
import { useEffect, useState } from 'react';
import { getGuildGames } from '../../api/interfaces/guilds/getGuildGames.ts';
import { useServerStore } from '../../stores/useServerStore.ts';

function useManageGames() {
  const [games, setGames] = useState<IGame[]>();
  const { server } = useServerStore();

  useEffect(() => {
    getGuildGames({ guildId: server.id }).then(response => setGames(response.data.games));
  }, [server.id]);

  return { games };
}

export default useManageGames;