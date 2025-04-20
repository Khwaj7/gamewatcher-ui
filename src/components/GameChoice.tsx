import {
  Button,
  Checkbox,
  CheckboxGroup,
  Code,
  Fieldset
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { z } from 'zod';
import { HiOutlinePlus } from 'react-icons/hi';

const formSchema = z.object({
  game: z.array(z.string()).min(1, {
    message: 'Please select at least one game.'
  })
});

type FormData = z.infer<typeof formSchema>

const items = [
  { label: 'InZoi', value: 'inzoi' },
  { label: 'Dune Awakening', value: 'dune-awakening' },
  { label: 'Wreckfest 2', value: 'wreckfest-2' },
  { label: 'Borderlands 4', value: 'borderlands-4' }
];

const GameChoice = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const games = useController({
    control,
    name: 'game',
    defaultValue: []
  });

  const invalid = !!errors.game;

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Fieldset.Root invalid={invalid}>
        <Fieldset.Legend>Select your games</Fieldset.Legend>
        <CheckboxGroup
          invalid={invalid}
          value={games.field.value}
          onValueChange={games.field.onChange}
          name={games.field.name}
        >
          <Fieldset.Content>
            {items.map((item) => (
              <Checkbox.Root key={item.value} value={item.value}>
                <Checkbox.HiddenInput />
                <Checkbox.Control>
                  <HiOutlinePlus />
                </Checkbox.Control>
                <Checkbox.Label>{item.label}</Checkbox.Label>
              </Checkbox.Root>
            ))}
          </Fieldset.Content>
        </CheckboxGroup>

        {errors.game && (
          <Fieldset.ErrorText>{errors.game.message}</Fieldset.ErrorText>
        )}

        <Button size="sm" type="submit" alignSelf="flex-start">
          Submit
        </Button>

        <Code>Values: {JSON.stringify(games.field.value, null, 2)}</Code>
      </Fieldset.Root>
    </form>
  );
};

export default GameChoice;