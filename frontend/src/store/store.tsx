import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { UserInfo } from "../types/UserInfo.types";

export const useAccountStore = create(
  combine(
    {
      account: null as UserInfo | null,
      initialized: false,
    },
    (set) => ({
      setAccount: (account: UserInfo | null) => set({ account }),
      setInitialized: (value: boolean) => set({ initialized: value }),
    }),
  ),
);