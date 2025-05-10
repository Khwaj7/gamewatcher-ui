import { Box, Button, Card, Image } from '@chakra-ui/react';
import { IGame } from '../../interfaces/IGame.ts';

interface IProps {
  game: IGame;
}

export const CardHorizontal = (props: IProps) => {
  const { game } = props;

  return (

    <Card.Root flexDirection="row" overflow="hidden" maxW="xl" p={1} m={1}>
      <Image
        objectFit="contain"
        maxW="200px"
        src="https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png"
        alt="Tomb Raider"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{game.name}</Card.Title>
          <Card.Description>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button>Add</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};
