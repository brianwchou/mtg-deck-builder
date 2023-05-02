import { useContext, useState } from "react";
import { DeckDispatchContext } from "../../DeckContext";
import { filteredSearchURL } from "../../urls/scryfall";
import { CardData } from "../../testdata";

const manaSymbolStyle = {
  maxWidth: "15px",
  maxHeight: "15px",
};

export function Search() {
  const dispatch = useContext(DeckDispatchContext);
  const [searchBoxText, setSearchBoxText] = useState("");
  const [filterColors, setFilterColors] = useState("");
  const [cardType, setCardType] = useState("");

  const getCards = async (event: React.FormEvent) => {
    event.preventDefault();

    let searchCardNameURL = filteredSearchURL + searchBoxText;

    searchCardNameURL += cardType ? `+t:${cardType}` : "";

    searchCardNameURL += filterColors ? `+c:${filterColors}` : "";

    searchCardNameURL += "&unique";

    const foundCards = await fetch(searchCardNameURL)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("response", response.status);
          return null;
        }
      })
      .then((json) => {
        if (json) {
          var cards = json.data.map((data: CardData) => {
            return {
              layout: data.layout,
              lang: data.lang,
              id: data.id,
              object: data.object,
              tcgplayer_id: data.tcgplayer_id,
              artist: data.artist,
              cmc: data.cmc,
              colors: data.colors,
              color_identity: data.color_identity,
              image_uris: data.image_uris,
              mana_cost: data.mana_cost,
              name: data.name,
              oracle_text: data.oracle_text,
              power: data.power,
              rarity: data.rarity,
              reserved: data.reserved,
              set: data.set,
              set_name: data.set_name,
              toughness: data.toughness,
              type_line: data.type_line,
            };
          });
          console.log(cards);
          // dispatch(loadSearchCards(cards));
        }
      });

    console.log(foundCards);

    // dispatch(getCardSearchData(searchCardNameURL));
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    let color = event.target.dataset["value"] as string;

    if (filterColors.includes(color)) {
      let newfilterColors = filterColors.replace(color, "");
      setFilterColors(newfilterColors);
    } else {
      setFilterColors(filterColors.concat(event.target.value));
    }
  };

  const onSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchBoxText(input);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cardtype = event.target.value;
    setCardType(cardtype);
  };

  return (
    <form onSubmit={getCards}>
      <input className="field" type="text" onChange={onSearchTextChange} />
      <button className="submitbutton" type="submit">
        submit
      </button>
      <br />
      <span>
        <input type="checkbox" onChange={handleCheck} data-value="w" />
        <img
          src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/8e/W.svg"
          alt="white_mana"
          style={manaSymbolStyle}
        />
      </span>
      <span>
        <input type="checkbox" onChange={handleCheck} data-value="u" />
        <img
          src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/9/9f/U.svg"
          alt="blue_mana"
          style={manaSymbolStyle}
        />
      </span>
      <span>
        <input type="checkbox" onChange={handleCheck} data-value="b"></input>
        <img
          src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/2/2f/B.svg"
          alt="black_mana"
          style={manaSymbolStyle}
        />
      </span>
      <span>
        <input type="checkbox" onChange={handleCheck} data-value="r"></input>
        <img
          src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/87/R.svg"
          alt="red_mana"
          style={manaSymbolStyle}
        />
      </span>
      <span>
        <input type="checkbox" onChange={handleCheck} data-value="g"></input>
        <img
          src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/88/G.svg"
          alt="green_mana"
          style={manaSymbolStyle}
        />
      </span>
      <select onChange={handleSelect}>
        <option value="">Choose A Card Type</option>
        <option value="artifact">Artifact</option>
        <option value="creature">Creature</option>
        <option value="enchantment">Enchantment</option>
        <option value="instant">Instant</option>
        <option value="sorcery">Sorcery</option>
        <option value="planeswalker">Planeswalker</option>
        <option value="land">Land</option>
      </select>
    </form>
  );
}
