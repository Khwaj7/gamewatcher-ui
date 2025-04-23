import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import AddNewGame from '../components/AddNewGame.tsx';
import Dashboard from './Dashboard.tsx';
import { ColorModeButton } from '../components/ui/color-mode.tsx';
import GameWatcherStatus from '../components/GameWatcherStatus.tsx';

const Home = () => {
  const [showWatchedGames, setShowWatchedGames] = useState<boolean>(false);
  const [showDashboard, setShowDashboard] = useState<boolean>(true);

  const links = [{
    label: 'Dashboard', href: '/', stateSetter: () => {
      setShowDashboard(true);
      setShowWatchedGames(false);
    },
  }, {
    label: 'Your watched games', href: '/games', stateSetter: () => {
      setShowDashboard(false);
      setShowWatchedGames(true);
    },
  }];

  return (
    <>
      <Box className="max-w-4xl" mx="auto" mt={8} padding={8}>
        <Box
          position="fixed"
          top="1rem"
          right="2rem"
          zIndex={1000}
          userSelect="none"
          display="flex"
          alignItems="center"
          gap={3}
        >
          <ColorModeButton />
          <GameWatcherStatus />
        </Box>

        <div>
          <Flex direction="column" gap={2} mt={2}>
            <Box borderRight="1px solid black"
                 _dark={{ borderRight: '1px solid white' }}
                 flexShrink={0}
                 w={200}
                 pr={2}>
              <Heading size="2xl" mb={2}>
                Dashboard
              </Heading>
            {links.map((link) => {
              return (<Button variant="outline" onClick={() => link.stateSetter()}>
                {link.label}
              </Button>);
            })}
            </Box>
          </Flex>

        </div>
      </Box>
          {showDashboard && <Dashboard />}
          {showWatchedGames && <AddNewGame />}
    </>
  );
};

export default Home;