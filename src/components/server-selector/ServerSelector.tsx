import { createListCollection, ListCollection, Portal, Select } from '@chakra-ui/react';
import useServerSelector from './useServerSelector.ts';
import { useEffect, useState } from 'react';
import { IGuildCollection } from '../../interfaces/IGuildCollection.ts';
import { useServerStore } from '../../stores/useServerStore.ts';

const ServerSelector = () => {
  const { guilds } = useServerSelector();
  const [guildCollection, setGuildCollection] = useState<ListCollection<IGuildCollection>>();
  const { server, selectServer } = useServerStore();


  useEffect(() => {
    if (!guilds) return;
    setGuildCollection(createListCollection({
      items: guilds.map(guild => ({
        label: guild.channel_id,
        value: guild.id,
      })),
    }));
  }, [guilds]);


  if (!guildCollection) return null;

  return (
    <Select.Root
      collection={guildCollection}
      size="sm"
      onValueChange={(value) => {
        console.log('server selected:', value);
        //selectServer({id: value.});
      }}>
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
            {guildCollection.items.map((guild) => (
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