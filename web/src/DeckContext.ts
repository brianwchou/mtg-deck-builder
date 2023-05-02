import { createContext } from "react";
import { CardData, Deck } from "./testdata";

export type DeckAction = {
  type: string;
  payload: any;
};

export const DeckContext = createContext<Deck>({
  deckName: "",
  commander: {} as CardData,
  cards: [] as CardData[],
});
export const DeckDispatchContext = createContext<React.Dispatch<DeckAction>>(
  () => null
);
