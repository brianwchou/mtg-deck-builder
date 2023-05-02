import { Reducer, useReducer } from "react";
import Deckbuilder from "./layouts/Deckbuilder";
import "./App.css";
import { DeckAction, DeckContext, DeckDispatchContext } from "./DeckContext";
import toshiro, { Deck } from "./testdata";

const cardReducer: Reducer<Deck, DeckAction> = (deck, action) => {
  switch (action.type) {
    case "ADD":
      deck.cards = [...deck.cards, action.payload];
    case "REMOVE":
      const removeAt = deck.cards.findIndex(action.payload);
      deck.cards = [
        ...deck.cards.slice(0, removeAt - 1),
        ...deck.cards.slice(removeAt),
      ];
  }
  return deck;
};

function App() {
  const [deck, deckDispatch] = useReducer(cardReducer, toshiro);

  return (
    <div className="App border">
      <DeckContext.Provider value={deck}>
        <DeckDispatchContext.Provider value={deckDispatch}>
          <Deckbuilder></Deckbuilder>
        </DeckDispatchContext.Provider>
      </DeckContext.Provider>
    </div>
  );
}

export default App;
