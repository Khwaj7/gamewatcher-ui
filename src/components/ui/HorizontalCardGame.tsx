import { Box, Button, Card, Image } from '@chakra-ui/react';
import { IGame } from '../../interfaces/IGame.ts';
import useHorizontalCardGame from './useHorizontalCardGame.ts';
import { useServerStore } from '../../stores/useServerStore.ts';

interface IProps {
  game: IGame;
}

export const HorizontalCardGame = (props: IProps) => {
  const { game } = props;
  const { server } = useServerStore();
  const { toggleSubscription } = useHorizontalCardGame({ guildId: server.id, gameId: game.id });

  const color = game.subscribed ? 'green' : 'red';
  const buttonMessage = game.subscribed ? 'Remove' : 'Add';

  return (

    <Card.Root flexDirection="row" overflow="hidden" maxW="xl" p={1} m={1}>
      <Image
        objectFit="contain"
        maxW="200px"
        src="https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png"
        alt="Game image"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{game.name}</Card.Title>
          <Card.Description>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button colorPalette={color} onClick={() => toggleSubscription()}>{buttonMessage}</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};
