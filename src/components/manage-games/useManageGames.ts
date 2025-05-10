import { IGame } from '../../interfaces/IGame.ts';
import { useState } from 'react';
import { getGuildGames } from '../../api/interfaces/guilds/getGuildGames.ts';

function useManageGames() {
  const [games, setGames] = useState<IGame[]>();

  getGuildGames({ guildId: 'test' }).then(response => setGames([response.data]));

  return { games };
}

export default useManageGames;