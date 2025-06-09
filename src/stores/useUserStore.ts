// stores/useUserStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserState = {
  username: string | null
  login: (name: string) => void
  logout: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: null,
      login: (name: string) => set({ username: name }),
      logout: () => set({ username: null }),
    }),
    {
      name: 'user-storage', // nom de la clé dans localStorage
    }
  )
)
