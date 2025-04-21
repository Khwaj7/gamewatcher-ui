import GameSelector from '../components/GameSelector.tsx';
import {Box, Button, Container, Flex, Heading} from '@chakra-ui/react';
import GameWatcherStatus from "../components/GameWatcherStatus.tsx";
import {ColorModeButton} from "../components/ui/color-mode.tsx";

const Dashboard = () => {

    const links = [
        {label: "Dashboard", href: "/"},
        {label: "Your watched games", href: "/games"},
    ];

    return (
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
                <ColorModeButton/>
                <GameWatcherStatus/>
            </Box>

            <Flex align="flex-start" mb={8}>
                <Box borderRight="1px solid black"
                     _dark={{borderRight: "1px solid white"}}
                     flexShrink={0}
                     w={200}
                    pr={2}>
                    <Heading size="2xl" mb={2}>
                        Dashboard
                    </Heading>
                    <Flex direction="column" gap={2} mt={2}>
                        {links.map((link) => (
                            <Button variant="outline">{link.label}</Button>
                        ))}
                    </Flex>
                </Box>
                <Container>
                    <GameSelector/>
                </Container>
            </Flex>
        </Box>
    );
};

export default Dashboard;
