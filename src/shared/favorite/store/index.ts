import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Location } from "@/types/oxilor";

interface FavoriteLocationStore {
  list: Location[];
  add: (location: Location) => void;
  remove: (location: Location) => void;
}

export const useFavoriteLocation = create<FavoriteLocationStore>()(
  devtools(
    persist(
      (set, get) => {
        return {
          list: [],
          add: (location: Location) => {
            set({ list: get().list.concat(location) });
          },
          remove: (location: Location) => {
            set({ list: get().list.filter((loc) => loc.id !== location.id) });
          },
        };
      },
      { name: "favorite" },
    ),
    { name: "favorite" },
  ),
);
