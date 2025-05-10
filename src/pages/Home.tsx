import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import ManageGames from '../components/manage-games/ManageGames.tsx';
import Dashboard from './Dashboard.tsx';
import { ColorModeButton } from '../components/ui/color-mode.tsx';
import GameWatcherStatus from '../components/GameWatcherStatus.tsx';
import { IMenuLink } from '../interfaces/IMenuLink.ts';
import MainAcquisition from './acquisition/MainAcquisition.tsx';
import ServerSelector from '../components/server-selector/ServerSelector.tsx';

const Home = () => {
  const [showDashboard, setShowDashboard] = useState<boolean>(true);
  const [showWatchedGames, setShowWatchedGames] = useState<boolean>(false);
  const [showAcquisition, setShowAcquisition] = useState<boolean>(false);

  const links: IMenuLink[] = [{
    label: 'Dashboard', href: '/', stateSetter: () => {
      setShowDashboard(true);
      setShowWatchedGames(false);
      setShowAcquisition(false);
    },
  },
    {
      label: 'Manage your games', href: '/games', stateSetter: () => {
        setShowDashboard(false);
        setShowWatchedGames(true);
        setShowAcquisition(false);
      },
    },
    {
      label: 'Add a new server', href: '/acquisition', stateSetter: () => {
        setShowDashboard(false);
        setShowWatchedGames(false);
        setShowAcquisition(true);
      },
    },
  ];

  return (
    <>
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

      <Flex minH="100vh">
        <Box
          borderRight="1px solid"
          borderColor="blackAlpha.200"
          _dark={{ borderColor: 'whiteAlpha.300' }}
          w="250px"
          flexShrink={0}
          position="fixed"
          left={0}
          top={0}
          bottom={0}
          p={4}
        >
          <Heading size="xl" mb={6}>
            Game Watcher
          </Heading>
          <Flex direction="column" gap={1}>
            <ServerSelector></ServerSelector>
            {links.map((link) => (
              <Button key={link.label} variant="outline" onClick={link.stateSetter} justifyContent="flex-start">
                {link.label}
              </Button>))}
          </Flex>
        </Box>

        <Box flex="1" ml="250px" p={8} pt={16}>
          {showAcquisition && <MainAcquisition></MainAcquisition>}
          {showDashboard && <Dashboard />}
          {showWatchedGames && <ManageGames />}
        </Box>
      </Flex>
    </>
  );
};

export default Home;