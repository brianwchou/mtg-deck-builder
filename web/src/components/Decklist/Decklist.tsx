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
      <div className="decklist-item count">1</div>
      <div className="decklist-item text">{item.name}</div>
      <div className="decklist-item manacost">{item.mana_cost}</div>
      <button className="decklist-item" onClick={removeCardOnClick}>
        -
      </button>
    </div>
  );
};

// Deck group
function groupCards(list: CardData[]) {
  return list.reduce(
    (sortedByTypes, card) => {
      const typeline = card.type_line.toLowerCase().split("//")[0];

      const {
        creatures,
        lands,
        enchantments,
        artifacts,
        planeswalkers,
        sorceries,
        instants,
        other,
      } = sortedByTypes;

      if (typeline.includes("creature")) {
        return { ...sortedByTypes, creatures: [...creatures, card] };
      } else if (typeline.includes("land")) {
        return { ...sortedByTypes, lands: [...lands, card] };
      } else if (typeline.includes("enchantment")) {
        return { ...sortedByTypes, enchantments: [...enchantments, card] };
      } else if (typeline.includes("artifact")) {
        return { ...sortedByTypes, artifacts: [...artifacts, card] };
      } else if (typeline.includes("planeswalker")) {
        return { ...sortedByTypes, planeswalkers: [...planeswalkers, card] };
      } else if (typeline.includes("sorcery")) {
        return { ...sortedByTypes, sorceries: [...sorceries, card] };
      } else if (typeline.includes("instant")) {
        return { ...sortedByTypes, instants: [...instants, card] };
      } else {
        return { ...sortedByTypes, other: [...other, card] };
      }
    },
    {
      artifacts: [] as CardData[],
      enchantments: [] as CardData[],
      instants: [] as CardData[],
      sorceries: [] as CardData[],
      planeswalkers: [] as CardData[],
      lands: [] as CardData[],
      creatures: [] as CardData[],
      other: [] as CardData[],
    }
  );
}

const DeckGroup = ({ name, list }: { name: string; list: CardData[] }) => {
  const cardlist = list.map((item, index) => {
    return <DeckListRow key={index} item={item} />;
  });
  return (
    <>
      <div className="decklist-column">
        <div>
          {name.toUpperCase()} | number of cards: {cardlist.length}
        </div>
        {cardlist}
      </div>
    </>
  );
};

// sorting scheme
export function Decklist({ cards }: { cards: CardData[] }) {
  const groupedCards = groupCards(cards);
  const groups = Object.entries(groupedCards).map(([name, cards], index) => {
    return <DeckGroup key={index} name={name} list={cards}></DeckGroup>;
  });

  return <div>{groups}</div>;
}
