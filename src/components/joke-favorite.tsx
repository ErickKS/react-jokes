import { useState } from "react";
import { Trash2 } from "lucide-react";

import { useListJokes } from "../hooks/useListJokes";
import { DialogAlert } from "./dialog";

export function JokeFavorite() {
  const [jokes, removeJoke] = useListJokes((state) => [state.jokes, state.removeJokeFromList]);

  const [openAlertDialog, setOpenAlertDialog] = useState(false);

  function handleJokeDelete(id: string) {
    removeJoke(id);
    setOpenAlertDialog(false);
  }

  return (
    <ul className="flex flex-col gap-2">
      {jokes.length === 0 ? (
        <li className="flex justify-center max-w-md w-full px-4 py-5 bg-[#131316] border border-[#1F1F22] rounded-lg">
          <p className="text-white">List empty</p>
        </li>
      ) : (
        jokes.map(({ joke, id }) => (
          <li
            key={joke}
            className="flex justify-between items-center gap-2 max-w-md w-full px-4 py-3 bg-[#131316] border border-[#1F1F22] rounded-lg"
          >
            <p className="text-white text-sm">{joke}</p>
            <button
              onClick={() => setOpenAlertDialog(!openAlertDialog)}
              className="p-2 rounded outline-none transition-all focus:bg-[#8995B1]/30 hover:bg-[#8995B1]/30"
            >
              <Trash2 size={20} className="stroke-[#C2CDE7]" />
            </button>
            <DialogAlert open={openAlertDialog} setOpen={setOpenAlertDialog} onDelete={() => handleJokeDelete(id)} />
          </li>
        ))
      )}
    </ul>
  );
}
