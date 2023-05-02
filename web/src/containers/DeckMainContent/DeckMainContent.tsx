import { useContext } from "react";
import { DeckContext } from "../../DeckContext";
import Cardviewer from "../../components/CardViewer";
import Decklist from "../../components/Decklist";
import "./DeckMainContent.css";

export function DeckMainContent() {
  const deck = useContext(DeckContext);
  return (
    <>
      <div>
        <h1>{deck.deckName}</h1>
      </div>
      <div className="main-content-layout">
        <Cardviewer commander={deck.commander}></Cardviewer>
        <Decklist cards={deck.cards} />
      </div>
    </>
  );
}
