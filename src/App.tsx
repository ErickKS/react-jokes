import { JokeCard } from "./components/joke-card";
import { Blur } from "./components/blur";

export function App() {
  return (
    <main className="relative flex flex-col justify-center items-center gap-6 h-screen overflow-x-hidden">
      <h1 className="text-3xl font-semibold text-center">Chuck's JokeBox</h1>

      <JokeCard />

      <Blur customStyles="top-[100px]" />
    </main>
  );
}
