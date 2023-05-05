import { Navbar } from "../../components/Navbar";
import Toolbar from "../../components/Toolbar";
import DeckMainContent from "../../containers/DeckMainContent";
import Footer from "../../containers/Footer";

export function Deckbuilder() {
  return (
    <div className={"main-content"}>
      <Navbar></Navbar>
      <Toolbar></Toolbar>
      <DeckMainContent></DeckMainContent>
      <Footer></Footer>
    </div>
  );
}
