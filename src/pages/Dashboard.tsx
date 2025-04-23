import { Heading, HStack, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <>
      <Heading size="2xl">Dashboard</Heading>
      <Stack gap="6" maxW="xs" margin="2em 0 0 0">
        <HStack width="full">
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={2} />
        </HStack>
        <Skeleton height="200px" />
      </Stack>
    </>
  );
};

export default Dashboard;
