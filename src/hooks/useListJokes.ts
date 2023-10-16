import { create } from "zustand";
import { v4 } from "uuid";

export interface Joke {
  id: string;
  joke: string;
}

interface JokeList {
  jokes: Joke[];
  addJokeToList: (joke: string) => void;
  removeJokeFromList: (id: string) => void;
}

export const useListJokes = create<JokeList>((set) => {
  const storedJokes: Joke[] = JSON.parse(localStorage.getItem("favoriteJokes") || "[]");

  return {
    jokes: storedJokes,
    addJokeToList: (joke) => {
      set((state) => {
        const newJoke = {
          id: v4(),
          joke,
        };
        const updatedJokes = [...state.jokes, newJoke];
        localStorage.setItem("favoriteJokes", JSON.stringify(updatedJokes));

        return { jokes: updatedJokes };
      });
    },
    removeJokeFromList: (id) => {
      set((state) => {
        const updatedJokes = state.jokes.filter((j) => j.id !== id);
        localStorage.setItem("favoriteJokes", JSON.stringify(updatedJokes));

        return { jokes: updatedJokes };
      });
    },
  };
});
