import { Button, ButtonGroup, Heading, Steps } from '@chakra-ui/react';
import { IStep } from '../../interfaces/IStep.ts';
import StepServerAcquisition from './StepServerAcquisition.tsx';
import StepAnotherStep from './StepAnotherStep.tsx';
import StepYetAnotherStep from './StepYetAnotherStep.tsx';

const MainAcquisition = () => {
  const steps: IStep[] = [
    {
      title: "Discord Server Information",
      description: "Discord information",
      child: StepServerAcquisition,
    },
    {
      title: "Another step",
      description: "Step 2 - TODO",
      child: StepAnotherStep,
    },
    {
      title: "Yet Another step",
      description: "Step 3 - TODO",
      child: StepYetAnotherStep,
    },
  ];

  return (
    <Steps.Root defaultStep={0} count={steps.length}>
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
        <Steps.Content key={index} index={index}>
          <Heading size="2xl">{step.description}</Heading>
          <step.child></step.child>
        </Steps.Content>
      ))}
      <Steps.CompletedContent>Your Discord server has been added to your dashboard!</Steps.CompletedContent>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  );
};

export default MainAcquisition;
