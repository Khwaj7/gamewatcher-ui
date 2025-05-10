import { IGame } from '../../interfaces/IGame.ts';
import { useEffect, useState } from 'react';
import { getGuildGames } from '../../api/interfaces/guilds/getGuildGames.ts';

function useManageGames() {
  const [games, setGames] = useState<IGame[]>();

  useEffect(() => {
    getGuildGames({ guildId: 'test' }).then(response => setGames(response.data.games));
  }, []);

  return { games };
}

export default useManageGames;