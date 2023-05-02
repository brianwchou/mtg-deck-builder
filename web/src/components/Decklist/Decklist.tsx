import { useContext } from "react";
import { DeckDispatchContext } from "../../DeckContext";
import { CardData } from "../../testdata";
import "./Decklist.css";

const DeckListRow = ({ item }: { item: CardData }) => {
  const dispatch = useContext(DeckDispatchContext);
  const removeCardOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.parentElement?.dataset[""]);
    dispatch({ type: "REMOVE", payload: "" });
  };
  return (
    <div className="border decklist-row">
      <div className="decklist-item">{item.name}</div>
      <div className="decklist-item manacost">{item.mana_cost}</div>
      <button className="decklist-item" onClick={removeCardOnClick}>
        -
      </button>
    </div>
  );
};

// Deck group
const DeckGroup = () => {
  return <div>Groups</div>;
};

export function Decklist({ cards }: { cards: CardData[] }) {
  const list = cards.map((item, index) => {
    return <DeckListRow key={index} item={item} />;
  });

  return <div className="decklist-column">{list}</div>;
}
