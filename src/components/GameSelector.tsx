import { Heading } from '@chakra-ui/react';
import GameChoice from './GameChoice.tsx';

const GameSelector = () => {
  return (
    <>
      <Heading size="xl">Add a new game</Heading>
      <GameChoice></GameChoice>
    </>
  );
};

export default GameSelector;