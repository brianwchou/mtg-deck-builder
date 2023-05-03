import { Navbar } from "../../components/Navbar";
import Toolbar from "../../components/Toolbar";
import { DeckMainContent } from "../../containers/DeckMainContent/DeckMainContent";

export function Deckbuilder() {
  return (
    <div>
      <Navbar></Navbar>
      <Toolbar></Toolbar>
      <DeckMainContent></DeckMainContent>
    </div>
  );
}
