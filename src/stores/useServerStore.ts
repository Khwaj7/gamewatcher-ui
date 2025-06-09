import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IGuild } from '../interfaces/IGuild.ts';

type ServerState = {
  server: IGuild;
  selectServer: (server: IGuild) => void;
}

export const useServerStore = create<ServerState>()(
  persist(
    (set) => ({
      server: { id: '', channel_id: '', webhook_url: '' },
      selectServer: (select: IGuild) => set({ server: select }),
    }),
    {
      name: 'server-storage',
    },
  ),
);