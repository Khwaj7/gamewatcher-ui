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
        src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg?t=1729010886"
        alt="Tomb Raider"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{game.name}</Card.Title>
          <Card.Description>
            Tomb Raider explores the intense origin story of Lara Croft and her ascent from a young woman to a hardened
            survivor.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button>Add</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};
