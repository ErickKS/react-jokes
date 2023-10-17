import { useState } from "react";
import axios from "axios";
import { Heart, List, RotateCw } from "lucide-react";
import { useListJokes } from "../hooks/useListJokes";
import { Dialog } from "./dialog";
import { JokeFavorite } from "./joke-favorite";

export function JokeCard() {
  const addJoke = useListJokes((state) => state.addJokeToList);

  const [openFavoritesDialog, setOpenFavoritesDialog] = useState(false);

  const [joke, setJoke] = useState("Chuck Norris' life is basically a gritty reboot of the concept of grittiness.");
  const [favorite, setFavorite] = useState(false);

  // animations
  const [effectButton, setEffectButton] = useState(false);

  async function getJoke() {
    setEffectButton(true);
    setFavorite(false);

    setJoke("");

    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    setJoke(data.value);
  }

  function handleAddOrRemoveFromFavorites() {
    setFavorite(!favorite);

    addJoke(joke);
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-md w-[calc(100%-32px)] p-6 bg-[#131316] border border-[#1F1F22] rounded-xl">
      <div className="h-[58px] w-[58px]">
        <img src="./chuck.gif" alt="Chuck Norris gif" />
      </div>

      <div className="flex justify-center items-center min-w-full h-32 px-4 mb-6">
        {joke && <p className="text-[#8995B1] font-medium text-center transition-all animate-opacity">{joke}</p>}
      </div>

      <div className="flex justify-between items-center w-full">
        <button
          onClick={handleAddOrRemoveFromFavorites}
          data-active={favorite}
          className="group flex justify-center items-center h-9 w-9 rounded-full transition-all hover:bg-[#8995B1]/30"
        >
          <Heart
            size={20}
            className="relative top-[1px] transition-all group-data-[active=false]:stroke-[#C2CDE7] group-data-[active=true]:stroke-red-500 group-data-[active=true]:fill-red-600"
          />
        </button>

        <button
          onClick={() => setOpenFavoritesDialog(!openFavoritesDialog)}
          className="flex justify-center items-center gap-2 h-8 px-3 rounded transition-all text-sm text-[#C2CDE7] font-medium hover:bg-[#8995B1]/30"
        >
          <List size={16} className="stroke[#C2CDE7]" />
          Favorites
        </button>

        <button
          onClick={getJoke}
          className="group flex justify-center items-center h-9 w-9 rounded-full transition-all hover:bg-[#8995B1]/30"
          onAnimationEnd={() => setEffectButton(false)}
        >
          <RotateCw size={20} className={`transition-all stroke-[#C2CDE7] ${effectButton && "animate-rotate"}`} />
        </button>
      </div>

      <Dialog open={openFavoritesDialog} setOpen={setOpenFavoritesDialog} title="Favorites Jokes">
        <JokeFavorite />
      </Dialog>
    </div>
  );
}
