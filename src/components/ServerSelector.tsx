import { createListCollection, Portal, Select } from '@chakra-ui/react';

const ServerSelector = () => {
  const guilds = createListCollection({
    items: [
      { label: 'SNEK', value: 'snek' },
      { label: 'TestServer', value: 'test-server' },
    ],
  });
  
  return (
    <Select.Root collection={guilds} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select your server</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select server" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {guilds.items.map((guild) => (
              <Select.Item item={guild} key={guild.value}>
                {guild.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default ServerSelector;