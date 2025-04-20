import GameSelector from '../components/GameSelector.tsx';
import { Container, Heading } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Heading size="2xl">Dashboard</Heading>
      <Container><GameSelector /></Container>
    </div>
  );
};

export default Dashboard;
