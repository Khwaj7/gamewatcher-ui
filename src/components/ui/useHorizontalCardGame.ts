import { updateGameSubscription } from '../../api/interfaces/games/postToggleSubscriptionGame.ts';
import { useState } from 'react';
import { IResponse } from '../../api/interfaces/IResponse.ts';

interface IProps {
  guildId: string;
  gameId: number;
}

function useHorizontalCardGame(props: IProps) {
  const [gameSubscriptionStatus, setGameSubscriptionStatus] = useState<IResponse<void> | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleSubscription = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await updateGameSubscription(props.guildId, props.gameId);
      setGameSubscriptionStatus(response);
      console.log('sub/unsub?', response);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return { gameSubscriptionStatus, setGameSubscriptionStatus, toggleSubscription, loading, error };
}

export default useHorizontalCardGame;
