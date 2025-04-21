import {HStack, Status} from "@chakra-ui/react";

const GameWatcherStatus = () => {
    return (
        <HStack gap="6">
            Status
            <Status.Root colorPalette="green">
                Discord
                <Status.Indicator/>
            </Status.Root>
            <Status.Root colorPalette="green">
                Website
                <Status.Indicator/>
            </Status.Root>
        </HStack>
    );
}

export default GameWatcherStatus;