import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { CardHorizontal } from '../ui/CardHorizontal.tsx';
import useManageGames from './useManageGames.ts';

/*const games: IGame[] = [
  {
    id: 1,
    name: 'Tomb Raider',
    releaseDate: '2013-11-1',
    subscribed: true,
    source: [
      {
        twitter: 'no',
        lastUpdate: 'never',
      },
    ],
  },
  {
    id: 2,
    name: 'GTA V',
    releaseDate: '2013-11-1',
    subscribed: true,
    source: [
      {
        twitter: 'no',
        lastUpdate: 'never',
      },
    ],
  },
  {
    id: 3,
    name: 'GTA IV',
    releaseDate: '2007-11-1',
    subscribed: true,
    source: [
      {
        twitter: 'no',
        lastUpdate: 'never',
      },
    ],
  },
  {
    id: 4,
    name: 'Warthunder',
    releaseDate: '2010-11-1',
    subscribed: true,
    source: [
      {
        twitter: 'no',
        lastUpdate: 'never',
      },
    ],
  },
];*/

const ManageGames = () => {
  const { games } = useManageGames();

  return (
    <>
      <Heading size="2xl" margin="0 0 2rem 0">Manage Games</Heading>
      <Stack margin="2rem 0 0 0">
        <SimpleGrid columns={3}>
          {games && games.map((game) => (
            <CardHorizontal key={game.id} game={game}></CardHorizontal>
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default ManageGames;