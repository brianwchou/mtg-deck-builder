export type Deck = {
  deckName: string;
  commander: CardData;
  cards: CardData[];
};

export type CardData = {
  layout: string;
  lang: string;
  id: string;
  object: string;
  tcgplayer_id?: number;
  artist: string;
  cmc: number;
  colors: string[];
  color_identity: string[];
  image_uris: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  set: string;
  set_name: string;
  mana_cost: string;
  name: string;
  oracle_text: string;
  power?: string;
  toughness?: string;
  rarity: string;
  reserved: boolean;
  type_line: string;
};

const toshiro: Deck = {
  deckName: "Toshi Umeboshi",
  commander: {
    layout: "normal",
    lang: "en",
    id: "0e767e07-febd-4025-bf03-d4d816bc1d3d",
    object: "card",
    tcgplayer_id: 12380,
    artist: "Christopher Moeller",
    cmc: 3,
    color_identity: ["B"],
    colors: ["B"],
    image_uris: {
      small:
        "https://cards.scryfall.io/small/front/0/e/0e767e07-febd-4025-bf03-d4d816bc1d3d.jpg?1562875477",
      normal:
        "https://cards.scryfall.io/normal/front/0/e/0e767e07-febd-4025-bf03-d4d816bc1d3d.jpg?1562875477",
      large:
        "https://cards.scryfall.io/large/front/0/e/0e767e07-febd-4025-bf03-d4d816bc1d3d.jpg?1562875477",
      png: "https://cards.scryfall.io/png/front/0/e/0e767e07-febd-4025-bf03-d4d816bc1d3d.png?1562875477",
      art_crop:
        "https://cards.scryfall.io/art_crop/front/0/e/0e767e07-febd-4025-bf03-d4d816bc1d3d.jpg?1562875477",
      border_crop:
        "https://cards.scryfall.io/border_crop/front/0/e/0e767e07-febd-4025-bf03-d4d816bc1d3d.jpg?1562875477",
    },
    mana_cost: "{1}{B}{B}",
    name: "Toshiro Umezawa",
    set: "bok",
    set_name: "Betrayers of Kamigawa",
    oracle_text:
      "Bushido 1 (Whenever this creature blocks or becomes blocked, it gets +1/+1 until end of turn.)\nWhenever a creature an opponent controls dies, you may cast target instant card from your graveyard. If that spell would be put into a graveyard, exile it instead.",
    power: "2",
    rarity: "rare",
    reserved: false,
    toughness: "2",
    type_line: "Legendary Creature — Human Samurai",
  },
  cards: [
    {
      layout: "normal",
      lang: "en",
      id: "96b6b2e1-c3e6-464c-8a13-b15deb34e862",
      object: "card",
      tcgplayer_id: 122709,
      artist: "Cliff Childs",
      cmc: 4,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
        normal:
          "https://cards.scryfall.io/normal/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
        large:
          "https://cards.scryfall.io/large/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
        png: "https://cards.scryfall.io/png/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.png?1576382939",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/9/6/96b6b2e1-c3e6-464c-8a13-b15deb34e862.jpg?1576382939",
      },
      mana_cost: "{4}",
      name: "Aetherflux Reservoir",
      set: "kld",
      set_name: "Kaladesh",
      oracle_text:
        "Whenever you cast a spell, you gain 1 life for each spell you've cast this turn.\nPay 50 life: Aetherflux Reservoir deals 50 damage to any target.",
      rarity: "rare",
      reserved: false,
      type_line: "Artifact",
    },
    {
      layout: "normal",
      lang: "en",
      id: "7b83536a-efa4-41f3-9424-75b0efc0aea5",
      object: "card",
      tcgplayer_id: 118424,
      artist: "Bastien L. Deharme",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/7/b/7b83536a-efa4-41f3-9424-75b0efc0aea5.jpg?1580014163",
        normal:
          "https://cards.scryfall.io/normal/front/7/b/7b83536a-efa4-41f3-9424-75b0efc0aea5.jpg?1580014163",
        large:
          "https://cards.scryfall.io/large/front/7/b/7b83536a-efa4-41f3-9424-75b0efc0aea5.jpg?1580014163",
        png: "https://cards.scryfall.io/png/front/7/b/7b83536a-efa4-41f3-9424-75b0efc0aea5.png?1580014163",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/7/b/7b83536a-efa4-41f3-9424-75b0efc0aea5.jpg?1580014163",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/7/b/7b83536a-efa4-41f3-9424-75b0efc0aea5.jpg?1580014163",
      },
      mana_cost: "{1}{B}",
      name: "Animate Dead",
      set: "ema",
      set_name: "Eternal Masters",
      oracle_text:
        'Enchant creature card in a graveyard\nWhen Animate Dead enters the battlefield, if it\'s on the battlefield, it loses "enchant creature card in a graveyard" and gains "enchant creature put onto the battlefield with Animate Dead." Return enchanted creature card to the battlefield under your control and attach Animate Dead to it. When Animate Dead leaves the battlefield, that creature\'s controller sacrifices it.\nEnchanted creature gets -1/-0.',
      rarity: "uncommon",
      reserved: false,
      type_line: "Enchantment — Aura",
    },
    {
      layout: "normal",
      lang: "en",
      id: "3ca11057-e50a-4817-924a-5bb504d0780f",
      object: "card",
      tcgplayer_id: 79670,
      artist: "Vincent Proce",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/3/c/3ca11057-e50a-4817-924a-5bb504d0780f.jpg?1593091873",
        normal:
          "https://cards.scryfall.io/normal/front/3/c/3ca11057-e50a-4817-924a-5bb504d0780f.jpg?1593091873",
        large:
          "https://cards.scryfall.io/large/front/3/c/3ca11057-e50a-4817-924a-5bb504d0780f.jpg?1593091873",
        png: "https://cards.scryfall.io/png/front/3/c/3ca11057-e50a-4817-924a-5bb504d0780f.png?1593091873",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/3/c/3ca11057-e50a-4817-924a-5bb504d0780f.jpg?1593091873",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/3/c/3ca11057-e50a-4817-924a-5bb504d0780f.jpg?1593091873",
      },
      mana_cost: "{B}{B}",
      name: "Bile Blight",
      set: "bng",
      set_name: "Born of the Gods",
      oracle_text:
        "Target creature and all other creatures with the same name as that creature get -3/-3 until end of turn.",
      rarity: "uncommon",
      reserved: false,
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "b9640cbf-b016-410e-9eff-e8924883517b",
      object: "card",
      tcgplayer_id: 276397,
      artist: "Rebecca Guay",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/b/9/b9640cbf-b016-410e-9eff-e8924883517b.jpg?1673147456",
        normal:
          "https://cards.scryfall.io/normal/front/b/9/b9640cbf-b016-410e-9eff-e8924883517b.jpg?1673147456",
        large:
          "https://cards.scryfall.io/large/front/b/9/b9640cbf-b016-410e-9eff-e8924883517b.jpg?1673147456",
        png: "https://cards.scryfall.io/png/front/b/9/b9640cbf-b016-410e-9eff-e8924883517b.png?1673147456",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/b/9/b9640cbf-b016-410e-9eff-e8924883517b.jpg?1673147456",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/b/9/b9640cbf-b016-410e-9eff-e8924883517b.jpg?1673147456",
      },
      mana_cost: "{1}{B}",
      name: "Bitterblossom",
      set: "2x2",
      set_name: "Double Masters 2022",
      oracle_text:
        "At the beginning of your upkeep, you lose 1 life and create a 1/1 black Faerie Rogue creature token with flying.",
      rarity: "mythic",
      reserved: false,
      type_line: "Tribal Enchantment — Faerie",
    },
    {
      layout: "normal",
      lang: "en",
      id: "d13cb0d3-3452-4c1f-81ec-024b4c45bbad",
      object: "card",
      tcgplayer_id: 273674,
      artist: "Evyn Fong",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/d/1/d13cb0d3-3452-4c1f-81ec-024b4c45bbad.jpg?1674140884",
        normal:
          "https://cards.scryfall.io/normal/front/d/1/d13cb0d3-3452-4c1f-81ec-024b4c45bbad.jpg?1674140884",
        large:
          "https://cards.scryfall.io/large/front/d/1/d13cb0d3-3452-4c1f-81ec-024b4c45bbad.jpg?1674140884",
        png: "https://cards.scryfall.io/png/front/d/1/d13cb0d3-3452-4c1f-81ec-024b4c45bbad.png?1674140884",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/d/1/d13cb0d3-3452-4c1f-81ec-024b4c45bbad.jpg?1674140884",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/d/1/d13cb0d3-3452-4c1f-81ec-024b4c45bbad.jpg?1674140884",
      },
      mana_cost: "{2}{B}",
      name: "Black Market Connections",
      set: "clb",
      set_name: "Commander Legends: Battle for Baldur's Gate",
      oracle_text:
        "At the beginning of your precombat main phase, choose one or more —\n• Sell Contraband — Create a Treasure token. You lose 1 life.\n• Buy Information — Draw a card. You lose 2 life.\n• Hire a Mercenary — Create a 3/2 colorless Shapeshifter creature token with changeling. You lose 3 life. (It has every creature type.)",
      rarity: "rare",
      reserved: false,
      type_line: "Enchantment",
    },
    {
      layout: "normal",
      lang: "en",
      id: "607b1066-1ca0-45e1-a55c-30aed77cc8dc",
      object: "card",
      tcgplayer_id: 248307,
      artist: "Sam White",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/6/0/607b1066-1ca0-45e1-a55c-30aed77cc8dc.jpg?1634349552",
        normal:
          "https://cards.scryfall.io/normal/front/6/0/607b1066-1ca0-45e1-a55c-30aed77cc8dc.jpg?1634349552",
        large:
          "https://cards.scryfall.io/large/front/6/0/607b1066-1ca0-45e1-a55c-30aed77cc8dc.jpg?1634349552",
        png: "https://cards.scryfall.io/png/front/6/0/607b1066-1ca0-45e1-a55c-30aed77cc8dc.png?1634349552",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/6/0/607b1066-1ca0-45e1-a55c-30aed77cc8dc.jpg?1634349552",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/6/0/607b1066-1ca0-45e1-a55c-30aed77cc8dc.jpg?1634349552",
      },
      mana_cost: "{2}{B}",
      name: "Blood Pact",
      set: "mid",
      set_name: "Innistrad: Midnight Hunt",
      oracle_text: "Target player draws two cards and loses 2 life.",
      rarity: "common",
      reserved: false,
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "d2124603-d20e-40eb-97f0-a66323397ac2",
      object: "card",
      tcgplayer_id: 187187,
      artist: "Jonas De Ro",
      cmc: 6,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/d/2/d2124603-d20e-40eb-97f0-a66323397ac2.jpg?1591205069",
        normal:
          "https://cards.scryfall.io/normal/front/d/2/d2124603-d20e-40eb-97f0-a66323397ac2.jpg?1591205069",
        large:
          "https://cards.scryfall.io/large/front/d/2/d2124603-d20e-40eb-97f0-a66323397ac2.jpg?1591205069",
        png: "https://cards.scryfall.io/png/front/d/2/d2124603-d20e-40eb-97f0-a66323397ac2.png?1591205069",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/d/2/d2124603-d20e-40eb-97f0-a66323397ac2.jpg?1591205069",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/d/2/d2124603-d20e-40eb-97f0-a66323397ac2.jpg?1591205069",
      },
      mana_cost: "{3}{B}{B}{B}",
      name: "Bolas's Citadel",
      set: "war",
      set_name: "War of the Spark",
      oracle_text:
        "You may look at the top card of your library any time.\nYou may play lands and cast spells from the top of your library. If you cast a spell this way, pay life equal to its mana value rather than pay its mana cost.\n{T}, Sacrifice ten nonland permanents: Each opponent loses 10 life.",
      rarity: "rare",
      reserved: false,
      type_line: "Legendary Artifact",
    },
    {
      layout: "normal",
      lang: "en",
      id: "6ca76614-78a1-4535-9162-70469d1e8a13",
      object: "card",
      tcgplayer_id: 6149,
      artist: "Greg Hildebrandt & Tim Hildebrandt",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/6/c/6ca76614-78a1-4535-9162-70469d1e8a13.jpg?1562444234",
        normal:
          "https://cards.scryfall.io/normal/front/6/c/6ca76614-78a1-4535-9162-70469d1e8a13.jpg?1562444234",
        large:
          "https://cards.scryfall.io/large/front/6/c/6ca76614-78a1-4535-9162-70469d1e8a13.jpg?1562444234",
        png: "https://cards.scryfall.io/png/front/6/c/6ca76614-78a1-4535-9162-70469d1e8a13.png?1562444234",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/6/c/6ca76614-78a1-4535-9162-70469d1e8a13.jpg?1562444234",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/6/c/6ca76614-78a1-4535-9162-70469d1e8a13.jpg?1562444234",
      },
      mana_cost: "{B}",
      name: "Bubbling Muck",
      set: "uds",
      set_name: "Urza's Destiny",
      oracle_text:
        "Until end of turn, whenever a player taps a Swamp for mana, that player adds an additional {B}.",
      rarity: "common",
      reserved: false,
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "e1efb0d3-2c72-46ff-bdc1-1069967365a0",
      object: "card",
      tcgplayer_id: 239396,
      artist: "Don Hazeltine",
      cmc: 0,
      colors: [],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/e/1/e1efb0d3-2c72-46ff-bdc1-1069967365a0.jpg?1626101023",
        normal:
          "https://cards.scryfall.io/normal/front/e/1/e1efb0d3-2c72-46ff-bdc1-1069967365a0.jpg?1626101023",
        large:
          "https://cards.scryfall.io/large/front/e/1/e1efb0d3-2c72-46ff-bdc1-1069967365a0.jpg?1626101023",
        png: "https://cards.scryfall.io/png/front/e/1/e1efb0d3-2c72-46ff-bdc1-1069967365a0.png?1626101023",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/e/1/e1efb0d3-2c72-46ff-bdc1-1069967365a0.jpg?1626101023",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/e/1/e1efb0d3-2c72-46ff-bdc1-1069967365a0.jpg?1626101023",
      },
      mana_cost: "",
      name: "Cabal Coffers",
      set: "mh2",
      set_name: "Modern Horizons 2",
      oracle_text: "{2}, {T}: Add {B} for each Swamp you control.",
      rarity: "mythic",
      reserved: false,
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "a5d85875-22da-4054-ae42-e85b472a6d5d",
      object: "card",
      artist: "Greg Hildebrandt",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/a/5/a5d85875-22da-4054-ae42-e85b472a6d5d.jpg?1562928510",
        normal:
          "https://cards.scryfall.io/normal/front/a/5/a5d85875-22da-4054-ae42-e85b472a6d5d.jpg?1562928510",
        large:
          "https://cards.scryfall.io/large/front/a/5/a5d85875-22da-4054-ae42-e85b472a6d5d.jpg?1562928510",
        png: "https://cards.scryfall.io/png/front/a/5/a5d85875-22da-4054-ae42-e85b472a6d5d.png?1562928510",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/a/5/a5d85875-22da-4054-ae42-e85b472a6d5d.jpg?1562928510",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/a/5/a5d85875-22da-4054-ae42-e85b472a6d5d.jpg?1562928510",
      },
      mana_cost: "{1}{B}",
      name: "Cabal Ritual",
      set: "vma",
      set_name: "Vintage Masters",
      oracle_text:
        "Add {B}{B}{B}.\nThreshold — Add {B}{B}{B}{B}{B} instead if seven or more cards are in your graveyard.",
      rarity: "uncommon",
      reserved: false,
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "0bda51ef-ee3e-48d4-92e2-c9083bbe0f80",
      object: "card",
      tcgplayer_id: 164377,
      artist: "Dimitar Marinski",
      cmc: 0,
      colors: [],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/0/b/0bda51ef-ee3e-48d4-92e2-c9083bbe0f80.jpg?1562731196",
        normal:
          "https://cards.scryfall.io/normal/front/0/b/0bda51ef-ee3e-48d4-92e2-c9083bbe0f80.jpg?1562731196",
        large:
          "https://cards.scryfall.io/large/front/0/b/0bda51ef-ee3e-48d4-92e2-c9083bbe0f80.jpg?1562731196",
        png: "https://cards.scryfall.io/png/front/0/b/0bda51ef-ee3e-48d4-92e2-c9083bbe0f80.png?1562731196",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/0/b/0bda51ef-ee3e-48d4-92e2-c9083bbe0f80.jpg?1562731196",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/0/b/0bda51ef-ee3e-48d4-92e2-c9083bbe0f80.jpg?1562731196",
      },
      mana_cost: "",
      name: "Cabal Stronghold",
      set: "dom",
      set_name: "Dominaria",
      oracle_text:
        "{T}: Add {C}.\n{3}, {T}: Add {B} for each basic Swamp you control.",
      rarity: "rare",
      reserved: false,
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "19336e3a-2242-4a30-a563-32f2e4fc18e9",
      object: "card",
      tcgplayer_id: 273749,
      artist: "Titus Lunter",
      cmc: 0,
      colors: [],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/1/9/19336e3a-2242-4a30-a563-32f2e4fc18e9.jpg?1674142821",
        normal:
          "https://cards.scryfall.io/normal/front/1/9/19336e3a-2242-4a30-a563-32f2e4fc18e9.jpg?1674142821",
        large:
          "https://cards.scryfall.io/large/front/1/9/19336e3a-2242-4a30-a563-32f2e4fc18e9.jpg?1674142821",
        png: "https://cards.scryfall.io/png/front/1/9/19336e3a-2242-4a30-a563-32f2e4fc18e9.png?1674142821",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/1/9/19336e3a-2242-4a30-a563-32f2e4fc18e9.jpg?1674142821",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/1/9/19336e3a-2242-4a30-a563-32f2e4fc18e9.jpg?1674142821",
      },
      mana_cost: "",
      name: "Castle Locthwain",
      set: "clb",
      set_name: "Commander Legends: Battle for Baldur's Gate",
      oracle_text:
        "Castle Locthwain enters the battlefield tapped unless you control a Swamp.\n{T}: Add {B}.\n{1}{B}{B}, {T}: Draw a card, then you lose life equal to the number of cards in your hand.",
      rarity: "rare",
      reserved: false,
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "52c2de5f-e486-4cfe-9fb6-be0078ce5f93",
      object: "card",
      tcgplayer_id: 206655,
      artist: "Caio Monteiro",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1581479717",
        normal:
          "https://cards.scryfall.io/normal/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1581479717",
        large:
          "https://cards.scryfall.io/large/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1581479717",
        png: "https://cards.scryfall.io/png/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.png?1581479717",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1581479717",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/5/2/52c2de5f-e486-4cfe-9fb6-be0078ce5f93.jpg?1581479717",
      },
      mana_cost: "{B}",
      name: "Cling to Dust",
      set: "thb",
      set_name: "Theros Beyond Death",
      oracle_text:
        "Exile target card from a graveyard. If it was a creature card, you gain 3 life. Otherwise, you draw a card.\nEscape—{3}{B}, Exile five other cards from your graveyard. (You may cast this card from your graveyard for its escape cost.)",
      rarity: "uncommon",
      reserved: false,
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "623c9804-42c4-4b69-bc39-f70d96929d07",
      object: "card",
      tcgplayer_id: 94301,
      artist: "Chris Rahn",
      cmc: 4,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/6/2/623c9804-42c4-4b69-bc39-f70d96929d07.jpg?1561944354",
        normal:
          "https://cards.scryfall.io/normal/front/6/2/623c9804-42c4-4b69-bc39-f70d96929d07.jpg?1561944354",
        large:
          "https://cards.scryfall.io/large/front/6/2/623c9804-42c4-4b69-bc39-f70d96929d07.jpg?1561944354",
        png: "https://cards.scryfall.io/png/front/6/2/623c9804-42c4-4b69-bc39-f70d96929d07.png?1561944354",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/6/2/623c9804-42c4-4b69-bc39-f70d96929d07.jpg?1561944354",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/6/2/623c9804-42c4-4b69-bc39-f70d96929d07.jpg?1561944354",
      },
      mana_cost: "{3}{B}",
      name: "Crypt Ghast",
      set: "c14",
      set_name: "Commander 2014",
      oracle_text:
        "Extort (Whenever you cast a spell, you may pay {W/B}. If you do, each opponent loses 1 life and you gain that much life.)\nWhenever you tap a Swamp for mana, add an additional {B}.",
      power: "2",
      rarity: "rare",
      reserved: false,
      toughness: "2",
      type_line: "Creature — Spirit",
    },
    {
      layout: "normal",
      lang: "en",
      id: "753db072-5d6a-4f37-8f7d-255572ecd3bd",
      object: "card",
      tcgplayer_id: 282845,
      artist: "Dominik Mayer",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/7/5/753db072-5d6a-4f37-8f7d-255572ecd3bd.jpg?1673307061",
        normal:
          "https://cards.scryfall.io/normal/front/7/5/753db072-5d6a-4f37-8f7d-255572ecd3bd.jpg?1673307061",
        large:
          "https://cards.scryfall.io/large/front/7/5/753db072-5d6a-4f37-8f7d-255572ecd3bd.jpg?1673307061",
        png: "https://cards.scryfall.io/png/front/7/5/753db072-5d6a-4f37-8f7d-255572ecd3bd.png?1673307061",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/7/5/753db072-5d6a-4f37-8f7d-255572ecd3bd.jpg?1673307061",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/7/5/753db072-5d6a-4f37-8f7d-255572ecd3bd.jpg?1673307061",
      },
      mana_cost: "{B}",
      name: "Cut Down",
      set: "dmu",
      set_name: "Dominaria United",
      oracle_text:
        "Destroy target creature with total power and toughness 5 or less.",
      rarity: "uncommon",
      reserved: false,
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "95f27eeb-6f14-4db3-adb9-9be5ed76b34b",
      object: "card",
      tcgplayer_id: 161421,
      artist: "Clint Langley",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
        normal:
          "https://cards.scryfall.io/normal/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
        large:
          "https://cards.scryfall.io/large/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
        png: "https://cards.scryfall.io/png/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.png?1628801678",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1628801678",
      },
      mana_cost: "{B}",
      name: "Dark Ritual",
      set: "a25",
      set_name: "Masters 25",
      oracle_text: "Add {B}{B}{B}.",
      rarity: "common",
      reserved: false,
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "c1a7e728-ba01-4e3d-b269-9e2dd85a1d1b",
      object: "card",
      tcgplayer_id: 262861,
      artist: "Jodie Muir",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/c/1/c1a7e728-ba01-4e3d-b269-9e2dd85a1d1b.jpg?1654567093",
        normal:
          "https://cards.scryfall.io/normal/front/c/1/c1a7e728-ba01-4e3d-b269-9e2dd85a1d1b.jpg?1654567093",
        large:
          "https://cards.scryfall.io/large/front/c/1/c1a7e728-ba01-4e3d-b269-9e2dd85a1d1b.jpg?1654567093",
        png: "https://cards.scryfall.io/png/front/c/1/c1a7e728-ba01-4e3d-b269-9e2dd85a1d1b.png?1654567093",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/c/1/c1a7e728-ba01-4e3d-b269-9e2dd85a1d1b.jpg?1654567093",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/c/1/c1a7e728-ba01-4e3d-b269-9e2dd85a1d1b.jpg?1654567093",
      },
      mana_cost: "{2}{B}",
      name: "Debt to the Kami",
      set: "neo",
      set_name: "Kamigawa: Neon Dynasty",
      oracle_text:
        "Choose one —\n• Target opponent exiles a creature they control.\n• Target opponent exiles an enchantment they control.",
      rarity: "common",
      reserved: false,
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "5bcb4398-edd1-41a7-a496-b12bce22ceb6",
      object: "card",
      tcgplayer_id: 191582,
      artist: "Joe Slucher",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/5/b/5bcb4398-edd1-41a7-a496-b12bce22ceb6.jpg?1562201610",
        normal:
          "https://cards.scryfall.io/normal/front/5/b/5bcb4398-edd1-41a7-a496-b12bce22ceb6.jpg?1562201610",
        large:
          "https://cards.scryfall.io/large/front/5/b/5bcb4398-edd1-41a7-a496-b12bce22ceb6.jpg?1562201610",
        png: "https://cards.scryfall.io/png/front/5/b/5bcb4398-edd1-41a7-a496-b12bce22ceb6.png?1562201610",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/5/b/5bcb4398-edd1-41a7-a496-b12bce22ceb6.jpg?1562201610",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/5/b/5bcb4398-edd1-41a7-a496-b12bce22ceb6.jpg?1562201610",
      },
      mana_cost: "{B}",
      name: "Defile",
      set: "mh1",
      set_name: "Modern Horizons",
      oracle_text:
        "Target creature gets -1/-1 until end of turn for each Swamp you control.",
      rarity: "common",
      reserved: false,
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "d9c88546-13c9-4d7e-a618-cb2ccd1dbc0f",
      object: "card",
      tcgplayer_id: 452255,
      artist: "Kamila Szutenberg",
      cmc: 0,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/d/9/d9c88546-13c9-4d7e-a618-cb2ccd1dbc0f.jpg?1674422181",
        normal:
          "https://cards.scryfall.io/normal/front/d/9/d9c88546-13c9-4d7e-a618-cb2ccd1dbc0f.jpg?1674422181",
        large:
          "https://cards.scryfall.io/large/front/d/9/d9c88546-13c9-4d7e-a618-cb2ccd1dbc0f.jpg?1674422181",
        png: "https://cards.scryfall.io/png/front/d/9/d9c88546-13c9-4d7e-a618-cb2ccd1dbc0f.png?1674422181",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/d/9/d9c88546-13c9-4d7e-a618-cb2ccd1dbc0f.jpg?1674422181",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/d/9/d9c88546-13c9-4d7e-a618-cb2ccd1dbc0f.jpg?1674422181",
      },
      mana_cost: "",
      name: "Demolition Field",
      oracle_text:
        "{T}: Add {C}.\n{2}, {T}, Sacrifice Demolition Field: Destroy target nonbasic land an opponent controls. That land's controller may search their library for a basic land card, put it onto the battlefield, then shuffle. You may search your library for a basic land card, put it onto the battlefield, then shuffle.",
      rarity: "uncommon",
      reserved: false,
      set: "bro",
      set_name: "The Brothers' War",
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "3bdbc231-5316-4abd-9d8d-d87cff2c9847",
      object: "card",
      tcgplayer_id: 179462,
      artist: "Zack Stella",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.jpg?1618695728",
        normal:
          "https://cards.scryfall.io/normal/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.jpg?1618695728",
        large:
          "https://cards.scryfall.io/large/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.jpg?1618695728",
        png: "https://cards.scryfall.io/png/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.png?1618695728",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.jpg?1618695728",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/3/b/3bdbc231-5316-4abd-9d8d-d87cff2c9847.jpg?1618695728",
      },
      mana_cost: "{1}{B}",
      name: "Demonic Tutor",
      oracle_text:
        "Search your library for a card, put that card into your hand, then shuffle.",
      rarity: "rare",
      reserved: false,
      set: "uma",
      set_name: "Ultimate Masters",
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "02f99756-d334-4dba-a375-ba3d91ecae62",
      object: "card",
      tcgplayer_id: 169324,
      artist: "Adam Paquette",
      cmc: 0,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/0/2/02f99756-d334-4dba-a375-ba3d91ecae62.jpg?1562300252",
        normal:
          "https://cards.scryfall.io/normal/front/0/2/02f99756-d334-4dba-a375-ba3d91ecae62.jpg?1562300252",
        large:
          "https://cards.scryfall.io/large/front/0/2/02f99756-d334-4dba-a375-ba3d91ecae62.jpg?1562300252",
        png: "https://cards.scryfall.io/png/front/0/2/02f99756-d334-4dba-a375-ba3d91ecae62.png?1562300252",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/0/2/02f99756-d334-4dba-a375-ba3d91ecae62.jpg?1562300252",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/0/2/02f99756-d334-4dba-a375-ba3d91ecae62.jpg?1562300252",
      },
      mana_cost: "",
      name: "Detection Tower",
      oracle_text:
        "{T}: Add {C}.\n{1}, {T}: Until end of turn, your opponents and creatures your opponents control with hexproof can be the targets of spells and abilities you control as though they didn't have hexproof.",
      rarity: "rare",
      reserved: false,
      set: "m19",
      set_name: "Core Set 2019",
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "90699423-2556-40f7-b8f5-c9d82f22d52e",
      object: "card",
      tcgplayer_id: 145420,
      artist: "Chippy",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/9/0/90699423-2556-40f7-b8f5-c9d82f22d52e.jpg?1562851557",
        normal:
          "https://cards.scryfall.io/normal/front/9/0/90699423-2556-40f7-b8f5-c9d82f22d52e.jpg?1562851557",
        large:
          "https://cards.scryfall.io/large/front/9/0/90699423-2556-40f7-b8f5-c9d82f22d52e.jpg?1562851557",
        png: "https://cards.scryfall.io/png/front/9/0/90699423-2556-40f7-b8f5-c9d82f22d52e.png?1562851557",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/9/0/90699423-2556-40f7-b8f5-c9d82f22d52e.jpg?1562851557",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/9/0/90699423-2556-40f7-b8f5-c9d82f22d52e.jpg?1562851557",
      },
      mana_cost: "{1}{B}",
      name: "Doom Blade",
      oracle_text: "Destroy target nonblack creature.",
      rarity: "uncommon",
      reserved: false,
      set: "ima",
      set_name: "Iconic Masters",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "d66f864b-b1bb-4596-93b8-3b4bfe6b1332",
      object: "card",
      tcgplayer_id: 179538,
      artist: "Seb McKinnon",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/d/6/d66f864b-b1bb-4596-93b8-3b4bfe6b1332.jpg?1547516853",
        normal:
          "https://cards.scryfall.io/normal/front/d/6/d66f864b-b1bb-4596-93b8-3b4bfe6b1332.jpg?1547516853",
        large:
          "https://cards.scryfall.io/large/front/d/6/d66f864b-b1bb-4596-93b8-3b4bfe6b1332.jpg?1547516853",
        png: "https://cards.scryfall.io/png/front/d/6/d66f864b-b1bb-4596-93b8-3b4bfe6b1332.png?1547516853",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/d/6/d66f864b-b1bb-4596-93b8-3b4bfe6b1332.jpg?1547516853",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/d/6/d66f864b-b1bb-4596-93b8-3b4bfe6b1332.jpg?1547516853",
      },
      mana_cost: "{B}",
      name: "Entomb",
      oracle_text:
        "Search your library for a card, put that card into your graveyard, then shuffle.",
      rarity: "rare",
      reserved: false,
      set: "uma",
      set_name: "Ultimate Masters",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "551c0a45-9515-4e51-84e5-79703832a661",
      object: "card",
      tcgplayer_id: 218259,
      artist: "Franz Vohwinkel",
      cmc: 1,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/5/5/551c0a45-9515-4e51-84e5-79703832a661.jpg?1646666270",
        normal:
          "https://cards.scryfall.io/normal/front/5/5/551c0a45-9515-4e51-84e5-79703832a661.jpg?1646666270",
        large:
          "https://cards.scryfall.io/large/front/5/5/551c0a45-9515-4e51-84e5-79703832a661.jpg?1646666270",
        png: "https://cards.scryfall.io/png/front/5/5/551c0a45-9515-4e51-84e5-79703832a661.png?1646666270",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/5/5/551c0a45-9515-4e51-84e5-79703832a661.jpg?1646666270",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/5/5/551c0a45-9515-4e51-84e5-79703832a661.jpg?1646666270",
      },
      mana_cost: "{1}",
      name: "Expedition Map",
      oracle_text:
        "{2}, {T}, Sacrifice Expedition Map: Search your library for a land card, reveal it, put it into your hand, then shuffle.",
      rarity: "common",
      reserved: false,
      set: "2xm",
      set_name: "Double Masters",
      type_line: "Artifact",
    },
    {
      layout: "normal",
      lang: "en",
      id: "0878b541-a730-49db-b062-5a01656e269d",
      object: "card",
      tcgplayer_id: 36342,
      artist: "Carl Critchlow",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/0/8/0878b541-a730-49db-b062-5a01656e269d.jpg?1562814332",
        normal:
          "https://cards.scryfall.io/normal/front/0/8/0878b541-a730-49db-b062-5a01656e269d.jpg?1562814332",
        large:
          "https://cards.scryfall.io/large/front/0/8/0878b541-a730-49db-b062-5a01656e269d.jpg?1562814332",
        png: "https://cards.scryfall.io/png/front/0/8/0878b541-a730-49db-b062-5a01656e269d.png?1562814332",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/0/8/0878b541-a730-49db-b062-5a01656e269d.jpg?1562814332",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/0/8/0878b541-a730-49db-b062-5a01656e269d.jpg?1562814332",
      },
      mana_cost: "{X}{B}{B}",
      name: "Exsanguinate",
      oracle_text:
        "Each opponent loses X life. You gain life equal to the life lost this way.",
      rarity: "uncommon",
      reserved: false,
      set: "som",
      set_name: "Scars of Mirrodin",
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "f86c30e0-35f3-4da8-a28c-722254b1bbe4",
      object: "card",
      tcgplayer_id: 273487,
      artist: "Andrey Kuzinskiy",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/f/8/f86c30e0-35f3-4da8-a28c-722254b1bbe4.jpg?1674141609",
        normal:
          "https://cards.scryfall.io/normal/front/f/8/f86c30e0-35f3-4da8-a28c-722254b1bbe4.jpg?1674141609",
        large:
          "https://cards.scryfall.io/large/front/f/8/f86c30e0-35f3-4da8-a28c-722254b1bbe4.jpg?1674141609",
        png: "https://cards.scryfall.io/png/front/f/8/f86c30e0-35f3-4da8-a28c-722254b1bbe4.png?1674141609",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/f/8/f86c30e0-35f3-4da8-a28c-722254b1bbe4.jpg?1674141609",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/f/8/f86c30e0-35f3-4da8-a28c-722254b1bbe4.jpg?1674141609",
      },
      mana_cost: "{1}{B}",
      name: "Feed the Swarm",
      oracle_text:
        "Destroy target creature or enchantment an opponent controls. You lose life equal to that permanent's mana value.",
      rarity: "common",
      reserved: false,
      set: "clb",
      set_name: "Commander Legends: Battle for Baldur's Gate",
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "17db644c-1acf-477d-9c20-f72221f1108a",
      object: "card",
      tcgplayer_id: 276798,
      artist: "Daniel Ljunggren",
      cmc: 0,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/1/7/17db644c-1acf-477d-9c20-f72221f1108a.jpg?1673149497",
        normal:
          "https://cards.scryfall.io/normal/front/1/7/17db644c-1acf-477d-9c20-f72221f1108a.jpg?1673149497",
        large:
          "https://cards.scryfall.io/large/front/1/7/17db644c-1acf-477d-9c20-f72221f1108a.jpg?1673149497",
        png: "https://cards.scryfall.io/png/front/1/7/17db644c-1acf-477d-9c20-f72221f1108a.png?1673149497",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/1/7/17db644c-1acf-477d-9c20-f72221f1108a.jpg?1673149497",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/1/7/17db644c-1acf-477d-9c20-f72221f1108a.jpg?1673149497",
      },
      mana_cost: "",
      name: "Forbidden Orchard",
      oracle_text:
        "{T}: Add one mana of any color.\nWhenever you tap Forbidden Orchard for mana, target opponent creates a 1/1 colorless Spirit creature token.",
      rarity: "rare",
      reserved: false,
      set: "2x2",
      set_name: "Double Masters 2022",
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "12f8071c-8955-4aa2-889c-6043df047223",
      object: "card",
      tcgplayer_id: 166821,
      artist: "Peter Mohrbacher",
      cmc: 0,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/1/2/12f8071c-8955-4aa2-889c-6043df047223.jpg?1562272439",
        normal:
          "https://cards.scryfall.io/normal/front/1/2/12f8071c-8955-4aa2-889c-6043df047223.jpg?1562272439",
        large:
          "https://cards.scryfall.io/large/front/1/2/12f8071c-8955-4aa2-889c-6043df047223.jpg?1562272439",
        png: "https://cards.scryfall.io/png/front/1/2/12f8071c-8955-4aa2-889c-6043df047223.png?1562272439",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/1/2/12f8071c-8955-4aa2-889c-6043df047223.jpg?1562272439",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/1/2/12f8071c-8955-4aa2-889c-6043df047223.jpg?1562272439",
      },
      mana_cost: "",
      name: "Ghost Quarter",
      oracle_text:
        "{T}: Add {C}.\n{T}, Sacrifice Ghost Quarter: Destroy target land. Its controller may search their library for a basic land card, put it onto the battlefield, then shuffle.",
      rarity: "uncommon",
      reserved: false,
      set: "cm2",
      set_name: "Commander Anthology Volume II",
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "15b69f74-3b54-4db4-abf3-b71db8cc9562",
      object: "card",
      tcgplayer_id: 69158,
      artist: "Seb McKinnon",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/1/5/15b69f74-3b54-4db4-abf3-b71db8cc9562.jpg?1562826367",
        normal:
          "https://cards.scryfall.io/normal/front/1/5/15b69f74-3b54-4db4-abf3-b71db8cc9562.jpg?1562826367",
        large:
          "https://cards.scryfall.io/large/front/1/5/15b69f74-3b54-4db4-abf3-b71db8cc9562.jpg?1562826367",
        png: "https://cards.scryfall.io/png/front/1/5/15b69f74-3b54-4db4-abf3-b71db8cc9562.png?1562826367",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/1/5/15b69f74-3b54-4db4-abf3-b71db8cc9562.jpg?1562826367",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/1/5/15b69f74-3b54-4db4-abf3-b71db8cc9562.jpg?1562826367",
      },
      mana_cost: "{2}{B}",
      name: "Grim Return",
      oracle_text:
        "Choose target creature card in a graveyard that was put there from the battlefield this turn. Put that card onto the battlefield under your control.",
      rarity: "rare",
      reserved: false,
      set: "m14",
      set_name: "Magic 2014",
      type_line: "Instant",
    },

    {
      layout: "normal",
      lang: "en",
      id: "59fa5bab-8626-4b45-a3a3-621f6d9509ab",
      object: "card",
      tcgplayer_id: 12009,
      artist: "Paolo Parente",
      cmc: 0,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/5/9/59fa5bab-8626-4b45-a3a3-621f6d9509ab.jpg?1562760153",
        normal:
          "https://cards.scryfall.io/normal/front/5/9/59fa5bab-8626-4b45-a3a3-621f6d9509ab.jpg?1562760153",
        large:
          "https://cards.scryfall.io/large/front/5/9/59fa5bab-8626-4b45-a3a3-621f6d9509ab.jpg?1562760153",
        png: "https://cards.scryfall.io/png/front/5/9/59fa5bab-8626-4b45-a3a3-621f6d9509ab.png?1562760153",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/5/9/59fa5bab-8626-4b45-a3a3-621f6d9509ab.jpg?1562760153",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/5/9/59fa5bab-8626-4b45-a3a3-621f6d9509ab.jpg?1562760153",
      },
      mana_cost: "",
      name: "Hall of the Bandit Lord",
      oracle_text:
        "Hall of the Bandit Lord enters the battlefield tapped.\n{T}, Pay 3 life: Add {C}. If that mana is spent on a creature spell, it gains haste.",
      rarity: "rare",
      reserved: false,
      set: "chk",
      set_name: "Champions of Kamigawa",
      type_line: "Legendary Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "e4e6794a-feeb-4fc8-a2ee-38c75c18aaae",
      object: "card",
      tcgplayer_id: 212369,
      artist: "Ryan Pancoast",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/e/4/e4e6794a-feeb-4fc8-a2ee-38c75c18aaae.jpg?1591226819",
        normal:
          "https://cards.scryfall.io/normal/front/e/4/e4e6794a-feeb-4fc8-a2ee-38c75c18aaae.jpg?1591226819",
        large:
          "https://cards.scryfall.io/large/front/e/4/e4e6794a-feeb-4fc8-a2ee-38c75c18aaae.jpg?1591226819",
        png: "https://cards.scryfall.io/png/front/e/4/e4e6794a-feeb-4fc8-a2ee-38c75c18aaae.png?1591226819",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/e/4/e4e6794a-feeb-4fc8-a2ee-38c75c18aaae.jpg?1591226819",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/e/4/e4e6794a-feeb-4fc8-a2ee-38c75c18aaae.jpg?1591226819",
      },
      mana_cost: "{1}{B}",
      name: "Heartless Act",
      oracle_text:
        "Choose one —\n• Destroy target creature with no counters on it.\n• Remove up to three counters from target creature.",
      rarity: "uncommon",
      reserved: false,
      set: "iko",
      set_name: "Ikoria: Lair of Behemoths",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "386ce3c9-869d-461c-a3de-c8add3786f73",
      object: "card",
      tcgplayer_id: 490572,
      artist: "Filip Burburan",
      cmc: 8,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/3/8/386ce3c9-869d-461c-a3de-c8add3786f73.jpg?1682203767",
        normal:
          "https://cards.scryfall.io/normal/front/3/8/386ce3c9-869d-461c-a3de-c8add3786f73.jpg?1682203767",
        large:
          "https://cards.scryfall.io/large/front/3/8/386ce3c9-869d-461c-a3de-c8add3786f73.jpg?1682203767",
        png: "https://cards.scryfall.io/png/front/3/8/386ce3c9-869d-461c-a3de-c8add3786f73.png?1682203767",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/3/8/386ce3c9-869d-461c-a3de-c8add3786f73.jpg?1682203767",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/3/8/386ce3c9-869d-461c-a3de-c8add3786f73.jpg?1682203767",
      },
      mana_cost: "{5}{B}{B}{B}",
      name: "Hoarding Broodlord",
      oracle_text:
        "Convoke\nFlying\nWhen Hoarding Broodlord enters the battlefield, search your library for a card, exile it face down, then shuffle. For as long as that card remains exiled, you may play it.\nSpells you cast from exile have convoke.",
      power: "7",
      rarity: "rare",
      reserved: false,
      set: "mom",
      set_name: "March of the Machine",
      toughness: "6",
      type_line: "Creature — Dragon",
    },
    {
      layout: "normal",
      lang: "en",
      id: "f827a9a0-7b72-49e2-85fa-adcce1e8fdda",
      object: "card",
      tcgplayer_id: 453125,
      artist: "David Auden Nash",
      cmc: 4,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/f/8/f827a9a0-7b72-49e2-85fa-adcce1e8fdda.jpg?1681549383",
        normal:
          "https://cards.scryfall.io/normal/front/f/8/f827a9a0-7b72-49e2-85fa-adcce1e8fdda.jpg?1681549383",
        large:
          "https://cards.scryfall.io/large/front/f/8/f827a9a0-7b72-49e2-85fa-adcce1e8fdda.jpg?1681549383",
        png: "https://cards.scryfall.io/png/front/f/8/f827a9a0-7b72-49e2-85fa-adcce1e8fdda.png?1681549383",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/f/8/f827a9a0-7b72-49e2-85fa-adcce1e8fdda.jpg?1681549383",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/f/8/f827a9a0-7b72-49e2-85fa-adcce1e8fdda.jpg?1681549383",
      },
      mana_cost: "{3}{B}",
      name: "Hostile Negotiations",
      oracle_text:
        "Exile the top three cards of your library in a face-down pile, then exile the top three cards of your library in another face-down pile. Look at the cards in each pile, then turn a pile of your choice face up. An opponent chooses one of those piles. Put all cards in the chosen pile into your hand and the rest into your graveyard. You lose 3 life.",
      rarity: "rare",
      reserved: false,
      set: "bro",
      set_name: "The Brothers' War",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "17824929-f131-4b8d-addb-66c25323155e",
      object: "card",
      tcgplayer_id: 246014,
      artist: "Naomi Baker",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/1/7/17824929-f131-4b8d-addb-66c25323155e.jpg?1634349911",
        normal:
          "https://cards.scryfall.io/normal/front/1/7/17824929-f131-4b8d-addb-66c25323155e.jpg?1634349911",
        large:
          "https://cards.scryfall.io/large/front/1/7/17824929-f131-4b8d-addb-66c25323155e.jpg?1634349911",
        png: "https://cards.scryfall.io/png/front/1/7/17824929-f131-4b8d-addb-66c25323155e.png?1634349911",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/1/7/17824929-f131-4b8d-addb-66c25323155e.jpg?1634349911",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/1/7/17824929-f131-4b8d-addb-66c25323155e.jpg?1634349911",
      },
      mana_cost: "{1}{B}",
      name: "Infernal Grasp",
      oracle_text: "Destroy target creature. You lose 2 life.",
      rarity: "uncommon",
      reserved: false,
      set: "mid",
      set_name: "Innistrad: Midnight Hunt",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "35af9d5c-4449-4549-b549-c3ba4a67dee0",
      object: "card",
      tcgplayer_id: 262133,
      artist: "Olivier Bernard",
      cmc: 5,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/3/5/35af9d5c-4449-4549-b549-c3ba4a67dee0.jpg?1654567184",
        normal:
          "https://cards.scryfall.io/normal/front/3/5/35af9d5c-4449-4549-b549-c3ba4a67dee0.jpg?1654567184",
        large:
          "https://cards.scryfall.io/large/front/3/5/35af9d5c-4449-4549-b549-c3ba4a67dee0.jpg?1654567184",
        png: "https://cards.scryfall.io/png/front/3/5/35af9d5c-4449-4549-b549-c3ba4a67dee0.png?1654567184",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/3/5/35af9d5c-4449-4549-b549-c3ba4a67dee0.jpg?1654567184",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/3/5/35af9d5c-4449-4549-b549-c3ba4a67dee0.jpg?1654567184",
      },
      mana_cost: "{1}{B}{B}{B}{B}",
      name: "Invoke Despair",
      oracle_text:
        "Target opponent sacrifices a creature. If they can't, they lose 2 life and you draw a card. Then repeat this process for an enchantment and a planeswalker.",
      rarity: "rare",
      reserved: false,
      set: "neo",
      set_name: "Kamigawa: Neon Dynasty",
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "7f85698a-821f-452d-9e31-e525c0100f2d",
      object: "card",
      tcgplayer_id: 94132,
      artist: "Daniel Ljunggren",
      cmc: 2,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/7/f/7f85698a-821f-452d-9e31-e525c0100f2d.jpg?1561947995",
        normal:
          "https://cards.scryfall.io/normal/front/7/f/7f85698a-821f-452d-9e31-e525c0100f2d.jpg?1561947995",
        large:
          "https://cards.scryfall.io/large/front/7/f/7f85698a-821f-452d-9e31-e525c0100f2d.jpg?1561947995",
        png: "https://cards.scryfall.io/png/front/7/f/7f85698a-821f-452d-9e31-e525c0100f2d.png?1561947995",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/7/f/7f85698a-821f-452d-9e31-e525c0100f2d.jpg?1561947995",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/7/f/7f85698a-821f-452d-9e31-e525c0100f2d.jpg?1561947995",
      },
      mana_cost: "{2}",
      name: "Jet Medallion",
      oracle_text: "Black spells you cast cost {1} less to cast.",
      rarity: "rare",
      reserved: false,
      set: "c14",
      set_name: "Commander 2014",
      type_line: "Artifact",
    },
    {
      layout: "normal",
      lang: "en",
      id: "3592fbe4-8588-486e-99ba-c327b0b6ba24",
      object: "card",
      tcgplayer_id: 196427,
      artist: "Chase Stone",
      cmc: 7,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/3/5/3592fbe4-8588-486e-99ba-c327b0b6ba24.jpg?1568003491",
        normal:
          "https://cards.scryfall.io/normal/front/3/5/3592fbe4-8588-486e-99ba-c327b0b6ba24.jpg?1568003491",
        large:
          "https://cards.scryfall.io/large/front/3/5/3592fbe4-8588-486e-99ba-c327b0b6ba24.jpg?1568003491",
        png: "https://cards.scryfall.io/png/front/3/5/3592fbe4-8588-486e-99ba-c327b0b6ba24.png?1568003491",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/3/5/3592fbe4-8588-486e-99ba-c327b0b6ba24.jpg?1568003491",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/3/5/3592fbe4-8588-486e-99ba-c327b0b6ba24.jpg?1568003491",
      },
      mana_cost: "{4}{B/P}{B/P}{B/P}",
      name: "K'rrik, Son of Yawgmoth",
      oracle_text:
        "({B/P} can be paid with either {B} or 2 life.)\nLifelink\nFor each {B} in a cost, you may pay 2 life rather than pay that mana.\nWhenever you cast a black spell, put a +1/+1 counter on K'rrik, Son of Yawgmoth.",
      power: "2",
      rarity: "rare",
      reserved: false,
      set: "c19",
      set_name: "Commander 2019",
      toughness: "2",
      type_line: "Legendary Creature — Phyrexian Horror Minion",
    },
    {
      layout: "normal",
      lang: "en",
      id: "84803db8-fdb0-462b-92f6-33d591593d2d",
      object: "card",
      tcgplayer_id: 187188,
      artist: "Kieran Yanner",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/8/4/84803db8-fdb0-462b-92f6-33d591593d2d.jpg?1557576516",
        normal:
          "https://cards.scryfall.io/normal/front/8/4/84803db8-fdb0-462b-92f6-33d591593d2d.jpg?1557576516",
        large:
          "https://cards.scryfall.io/large/front/8/4/84803db8-fdb0-462b-92f6-33d591593d2d.jpg?1557576516",
        png: "https://cards.scryfall.io/png/front/8/4/84803db8-fdb0-462b-92f6-33d591593d2d.png?1557576516",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/8/4/84803db8-fdb0-462b-92f6-33d591593d2d.jpg?1557576516",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/8/4/84803db8-fdb0-462b-92f6-33d591593d2d.jpg?1557576516",
      },
      mana_cost: "{1}{B}",
      name: "Liliana's Triumph",
      oracle_text:
        "Each opponent sacrifices a creature. If you control a Liliana planeswalker, each opponent also discards a card.",
      rarity: "uncommon",
      reserved: false,
      set: "war",
      set_name: "War of the Spark",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "127f3f4d-93f4-4e52-b3c1-325c3981e0e1",
      object: "card",
      tcgplayer_id: 118765,
      artist: "Erica Yang",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/1/2/127f3f4d-93f4-4e52-b3c1-325c3981e0e1.jpg?1580014290",
        normal:
          "https://cards.scryfall.io/normal/front/1/2/127f3f4d-93f4-4e52-b3c1-325c3981e0e1.jpg?1580014290",
        large:
          "https://cards.scryfall.io/large/front/1/2/127f3f4d-93f4-4e52-b3c1-325c3981e0e1.jpg?1580014290",
        png: "https://cards.scryfall.io/png/front/1/2/127f3f4d-93f4-4e52-b3c1-325c3981e0e1.png?1580014290",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/1/2/127f3f4d-93f4-4e52-b3c1-325c3981e0e1.jpg?1580014290",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/1/2/127f3f4d-93f4-4e52-b3c1-325c3981e0e1.jpg?1580014290",
      },
      mana_cost: "{B}{B}",
      name: "Malicious Affliction",
      oracle_text:
        "Morbid — When you cast this spell, if a creature died this turn, you may copy Malicious Affliction and may choose a new target for the copy.\nDestroy target nonblack creature.",
      rarity: "rare",
      reserved: false,
      set: "ema",
      set_name: "Eternal Masters",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "fce002dc-5fb5-465b-935e-042121f1119d",
      object: "card",
      tcgplayer_id: 491291,
      artist: "Jason Chan",
      cmc: 6,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/f/c/fce002dc-5fb5-465b-935e-042121f1119d.jpg?1682209105",
        normal:
          "https://cards.scryfall.io/normal/front/f/c/fce002dc-5fb5-465b-935e-042121f1119d.jpg?1682209105",
        large:
          "https://cards.scryfall.io/large/front/f/c/fce002dc-5fb5-465b-935e-042121f1119d.jpg?1682209105",
        png: "https://cards.scryfall.io/png/front/f/c/fce002dc-5fb5-465b-935e-042121f1119d.png?1682209105",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/f/c/fce002dc-5fb5-465b-935e-042121f1119d.jpg?1682209105",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/f/c/fce002dc-5fb5-465b-935e-042121f1119d.jpg?1682209105",
      },
      mana_cost: "{3}{B}{B}{B}",
      name: "Massacre Wurm",
      oracle_text:
        "When Massacre Wurm enters the battlefield, creatures your opponents control get -2/-2 until end of turn.\nWhenever a creature an opponent controls dies, that player loses 2 life.",
      power: "6",
      rarity: "mythic",
      reserved: false,
      set: "moc",
      set_name: "March of the Machine Commander",
      toughness: "5",
      type_line: "Creature — Phyrexian Wurm",
    },
    {
      layout: "normal",
      lang: "en",
      id: "5a53982e-3d66-4808-bcb5-46ff40567872",
      object: "card",
      tcgplayer_id: 248183,
      artist: "Tyler Walpole",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/5/a/5a53982e-3d66-4808-bcb5-46ff40567872.jpg?1634350039",
        normal:
          "https://cards.scryfall.io/normal/front/5/a/5a53982e-3d66-4808-bcb5-46ff40567872.jpg?1634350039",
        large:
          "https://cards.scryfall.io/large/front/5/a/5a53982e-3d66-4808-bcb5-46ff40567872.jpg?1634350039",
        png: "https://cards.scryfall.io/png/front/5/a/5a53982e-3d66-4808-bcb5-46ff40567872.png?1634350039",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/5/a/5a53982e-3d66-4808-bcb5-46ff40567872.jpg?1634350039",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/5/a/5a53982e-3d66-4808-bcb5-46ff40567872.jpg?1634350039",
      },
      mana_cost: "{2}{B}",
      name: "Morbid Opportunist",
      oracle_text:
        "Whenever one or more other creatures die, draw a card. This ability triggers only once each turn.",
      power: "1",
      rarity: "uncommon",
      reserved: false,
      set: "mid",
      set_name: "Innistrad: Midnight Hunt",
      toughness: "3",
      type_line: "Creature — Human Rogue",
    },
    {
      layout: "normal",
      lang: "en",
      id: "0ef8d3a2-5c6b-41e2-aa7d-81e4a5d04421",
      object: "card",
      tcgplayer_id: 247523,
      artist: "Caroline Gariba",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/0/e/0ef8d3a2-5c6b-41e2-aa7d-81e4a5d04421.jpg?1651951758",
        normal:
          "https://cards.scryfall.io/normal/front/0/e/0ef8d3a2-5c6b-41e2-aa7d-81e4a5d04421.jpg?1651951758",
        large:
          "https://cards.scryfall.io/large/front/0/e/0ef8d3a2-5c6b-41e2-aa7d-81e4a5d04421.jpg?1651951758",
        png: "https://cards.scryfall.io/png/front/0/e/0ef8d3a2-5c6b-41e2-aa7d-81e4a5d04421.png?1651951758",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/0/e/0ef8d3a2-5c6b-41e2-aa7d-81e4a5d04421.jpg?1651951758",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/0/e/0ef8d3a2-5c6b-41e2-aa7d-81e4a5d04421.jpg?1651951758",
      },
      mana_cost: "{2}{B}",
      name: "Ophiomancer",
      oracle_text:
        "At the beginning of each upkeep, if you control no Snakes, create a 1/1 black Snake creature token with deathtouch.",
      power: "2",
      rarity: "rare",
      reserved: false,
      set: "cc2",
      set_name: "Commander Collection: Black",
      toughness: "2",
      type_line: "Creature — Human Shaman",
    },
    {
      layout: "normal",
      lang: "en",
      id: "67a9c38b-6b3a-4056-a87c-fc48446f854f",
      object: "card",
      tcgplayer_id: 475505,
      artist: "Maxim Kostin",
      cmc: 4,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/6/7/67a9c38b-6b3a-4056-a87c-fc48446f854f.jpg?1675957044",
        normal:
          "https://cards.scryfall.io/normal/front/6/7/67a9c38b-6b3a-4056-a87c-fc48446f854f.jpg?1675957044",
        large:
          "https://cards.scryfall.io/large/front/6/7/67a9c38b-6b3a-4056-a87c-fc48446f854f.jpg?1675957044",
        png: "https://cards.scryfall.io/png/front/6/7/67a9c38b-6b3a-4056-a87c-fc48446f854f.png?1675957044",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/6/7/67a9c38b-6b3a-4056-a87c-fc48446f854f.jpg?1675957044",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/6/7/67a9c38b-6b3a-4056-a87c-fc48446f854f.jpg?1675957044",
      },
      mana_cost: "{B}{B}{B}{B}",
      name: "Phyrexian Obliterator",
      oracle_text:
        "Trample\nWhenever a source deals damage to Phyrexian Obliterator, that source's controller sacrifices that many permanents.",
      power: "5",
      rarity: "mythic",
      reserved: false,
      set: "one",
      set_name: "Phyrexia: All Will Be One",
      toughness: "5",
      type_line: "Creature — Phyrexian Horror",
    },

    {
      layout: "normal",
      lang: "en",
      id: "013eeb99-1b66-4fba-ad96-78deee901ea4",
      object: "card",
      tcgplayer_id: 234963,
      artist: "Kieran Yanner",
      cmc: 6,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/0/1/013eeb99-1b66-4fba-ad96-78deee901ea4.jpg?1624591309",
        normal:
          "https://cards.scryfall.io/normal/front/0/1/013eeb99-1b66-4fba-ad96-78deee901ea4.jpg?1624591309",
        large:
          "https://cards.scryfall.io/large/front/0/1/013eeb99-1b66-4fba-ad96-78deee901ea4.jpg?1624591309",
        png: "https://cards.scryfall.io/png/front/0/1/013eeb99-1b66-4fba-ad96-78deee901ea4.png?1624591309",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/0/1/013eeb99-1b66-4fba-ad96-78deee901ea4.jpg?1624591309",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/0/1/013eeb99-1b66-4fba-ad96-78deee901ea4.jpg?1624591309",
      },
      mana_cost: "{4}{B}{B}",
      name: "Professor Onyx",
      oracle_text:
        "Magecraft — Whenever you cast or copy an instant or sorcery spell, each opponent loses 2 life and you gain 2 life.\n+1: You lose 1 life. Look at the top three cards of your library. Put one of them into your hand and the rest into your graveyard.\n−3: Each opponent sacrifices a creature with the greatest power among creatures that player controls.\n−8: Each opponent may discard a card. If they don't, they lose 3 life. Repeat this process six more times.",
      rarity: "mythic",
      reserved: false,
      set: "stx",
      set_name: "Strixhaven: School of Mages",
      type_line: "Legendary Planeswalker — Liliana",
    },
    {
      layout: "normal",
      lang: "en",
      id: "93c2c11d-dfc3-4ba9-8c0f-a98114090396",
      object: "card",
      tcgplayer_id: 198584,
      artist: "Dmitry Burmak",
      cmc: 4,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/9/3/93c2c11d-dfc3-4ba9-8c0f-a98114090396.jpg?1572490217",
        normal:
          "https://cards.scryfall.io/normal/front/9/3/93c2c11d-dfc3-4ba9-8c0f-a98114090396.jpg?1572490217",
        large:
          "https://cards.scryfall.io/large/front/9/3/93c2c11d-dfc3-4ba9-8c0f-a98114090396.jpg?1572490217",
        png: "https://cards.scryfall.io/png/front/9/3/93c2c11d-dfc3-4ba9-8c0f-a98114090396.png?1572490217",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/9/3/93c2c11d-dfc3-4ba9-8c0f-a98114090396.jpg?1572490217",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/9/3/93c2c11d-dfc3-4ba9-8c0f-a98114090396.jpg?1572490217",
      },
      mana_cost: "{2}{B}{B}",
      name: "Rankle, Master of Pranks",
      oracle_text:
        "Flying, haste\nWhenever Rankle, Master of Pranks deals combat damage to a player, choose any number —\n• Each player discards a card.\n• Each player loses 1 life and draws a card.\n• Each player sacrifices a creature.",
      power: "3",
      rarity: "mythic",
      reserved: false,
      set: "eld",
      set_name: "Throne of Eldraine",
      toughness: "3",
      type_line: "Legendary Creature — Faerie Rogue",
    },
    {
      layout: "normal",
      lang: "en",
      id: "d27c6aaa-289e-451e-8fde-97a044c53fc4",
      object: "card",
      tcgplayer_id: 247525,
      artist: "Nils Hamm",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/d/2/d27c6aaa-289e-451e-8fde-97a044c53fc4.jpg?1651951796",
        normal:
          "https://cards.scryfall.io/normal/front/d/2/d27c6aaa-289e-451e-8fde-97a044c53fc4.jpg?1651951796",
        large:
          "https://cards.scryfall.io/large/front/d/2/d27c6aaa-289e-451e-8fde-97a044c53fc4.jpg?1651951796",
        png: "https://cards.scryfall.io/png/front/d/2/d27c6aaa-289e-451e-8fde-97a044c53fc4.png?1651951796",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/d/2/d27c6aaa-289e-451e-8fde-97a044c53fc4.jpg?1651951796",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/d/2/d27c6aaa-289e-451e-8fde-97a044c53fc4.jpg?1651951796",
      },
      mana_cost: "{B}",
      name: "Reanimate",
      oracle_text:
        "Put target creature card from a graveyard onto the battlefield under your control. You lose life equal to its mana value.",
      rarity: "rare",
      reserved: false,
      set: "cc2",
      set_name: "Commander Collection: Black",
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "05e6a7bc-a35a-4e68-99a0-be264553b5de",
      object: "card",
      tcgplayer_id: 257009,
      artist: "Sebastian Giacobino",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/0/5/05e6a7bc-a35a-4e68-99a0-be264553b5de.jpg?1673914032",
        normal:
          "https://cards.scryfall.io/normal/front/0/5/05e6a7bc-a35a-4e68-99a0-be264553b5de.jpg?1673914032",
        large:
          "https://cards.scryfall.io/large/front/0/5/05e6a7bc-a35a-4e68-99a0-be264553b5de.jpg?1673914032",
        png: "https://cards.scryfall.io/png/front/0/5/05e6a7bc-a35a-4e68-99a0-be264553b5de.png?1673914032",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/0/5/05e6a7bc-a35a-4e68-99a0-be264553b5de.jpg?1673914032",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/0/5/05e6a7bc-a35a-4e68-99a0-be264553b5de.jpg?1673914032",
      },
      mana_cost: "{2}{B}",
      name: "Saw in Half",
      oracle_text:
        "Destroy target creature. If that creature dies this way, its controller creates two tokens that are copies of that creature, except their base power is half that creature's power and their base toughness is half that creature's toughness. Round up each time.",
      rarity: "rare",
      reserved: false,
      set: "unf",
      set_name: "Unfinity",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "e900c1eb-968b-4046-b824-c167a7a5b682",
      object: "card",
      tcgplayer_id: 235964,
      artist: "Igor Kieryluk",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/e/9/e900c1eb-968b-4046-b824-c167a7a5b682.jpg?1624591402",
        normal:
          "https://cards.scryfall.io/normal/front/e/9/e900c1eb-968b-4046-b824-c167a7a5b682.jpg?1624591402",
        large:
          "https://cards.scryfall.io/large/front/e/9/e900c1eb-968b-4046-b824-c167a7a5b682.jpg?1624591402",
        png: "https://cards.scryfall.io/png/front/e/9/e900c1eb-968b-4046-b824-c167a7a5b682.png?1624591402",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/e/9/e900c1eb-968b-4046-b824-c167a7a5b682.jpg?1624591402",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/e/9/e900c1eb-968b-4046-b824-c167a7a5b682.jpg?1624591402",
      },
      mana_cost: "{2}{B}",
      name: "Sedgemoor Witch",
      oracle_text:
        'Menace\nWard—Pay 3 life. (Whenever this creature becomes the target of a spell or ability an opponent controls, counter it unless that player pays 3 life.)\nMagecraft — Whenever you cast or copy an instant or sorcery spell, create a 1/1 black and green Pest creature token with "When this creature dies, you gain 1 life."',
      power: "3",
      rarity: "rare",
      reserved: false,
      set: "stx",
      set_name: "Strixhaven: School of Mages",
      toughness: "2",
      type_line: "Creature — Human Warlock",
    },
    {
      layout: "normal",
      lang: "en",
      id: "e5142b7a-e580-4737-a4aa-2590f6610ceb",
      object: "card",
      tcgplayer_id: 276270,
      artist: "Michael Sutfin",
      cmc: 1,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/e/5/e5142b7a-e580-4737-a4aa-2590f6610ceb.jpg?1673149430",
        normal:
          "https://cards.scryfall.io/normal/front/e/5/e5142b7a-e580-4737-a4aa-2590f6610ceb.jpg?1673149430",
        large:
          "https://cards.scryfall.io/large/front/e/5/e5142b7a-e580-4737-a4aa-2590f6610ceb.jpg?1673149430",
        png: "https://cards.scryfall.io/png/front/e/5/e5142b7a-e580-4737-a4aa-2590f6610ceb.png?1673149430",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/e/5/e5142b7a-e580-4737-a4aa-2590f6610ceb.jpg?1673149430",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/e/5/e5142b7a-e580-4737-a4aa-2590f6610ceb.jpg?1673149430",
      },
      mana_cost: "{1}",
      name: "Sensei's Divining Top",
      oracle_text:
        "{1}: Look at the top three cards of your library, then put them back in any order.\n{T}: Draw a card, then put Sensei's Divining Top on top of its owner's library.",
      rarity: "rare",
      reserved: false,
      set: "2x2",
      set_name: "Double Masters 2022",
      type_line: "Artifact",
    },
    {
      layout: "normal",
      lang: "en",
      id: "769326d4-60af-4b19-85d9-d96d3acdb56e",
      object: "card",
      tcgplayer_id: 275358,
      artist: "Yeong-Hao Han",
      cmc: 1,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/7/6/769326d4-60af-4b19-85d9-d96d3acdb56e.jpg?1661583495",
        normal:
          "https://cards.scryfall.io/normal/front/7/6/769326d4-60af-4b19-85d9-d96d3acdb56e.jpg?1661583495",
        large:
          "https://cards.scryfall.io/large/front/7/6/769326d4-60af-4b19-85d9-d96d3acdb56e.jpg?1661583495",
        png: "https://cards.scryfall.io/png/front/7/6/769326d4-60af-4b19-85d9-d96d3acdb56e.png?1661583495",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/7/6/769326d4-60af-4b19-85d9-d96d3acdb56e.jpg?1661583495",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/7/6/769326d4-60af-4b19-85d9-d96d3acdb56e.jpg?1661583495",
      },
      mana_cost: "{1}",
      name: "Shadowspear",
      oracle_text:
        "Equipped creature gets +1/+1 and has trample and lifelink.\n{1}: Permanents your opponents control lose hexproof and indestructible until end of turn.\nEquip {2}",
      rarity: "rare",
      reserved: false,
      set: "phed",
      set_name: "Heads I Win, Tails You Lose",
      type_line: "Legendary Artifact — Equipment",
    },
    {
      layout: "normal",
      lang: "en",
      id: "a9225cc3-90f0-448f-a8d9-7c6c2796d077",
      object: "card",
      tcgplayer_id: 478441,
      artist: "Helge C. Balzer",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/a/9/a9225cc3-90f0-448f-a8d9-7c6c2796d077.jpg?1675957049",
        normal:
          "https://cards.scryfall.io/normal/front/a/9/a9225cc3-90f0-448f-a8d9-7c6c2796d077.jpg?1675957049",
        large:
          "https://cards.scryfall.io/large/front/a/9/a9225cc3-90f0-448f-a8d9-7c6c2796d077.jpg?1675957049",
        png: "https://cards.scryfall.io/png/front/a/9/a9225cc3-90f0-448f-a8d9-7c6c2796d077.png?1675957049",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/a/9/a9225cc3-90f0-448f-a8d9-7c6c2796d077.jpg?1675957049",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/a/9/a9225cc3-90f0-448f-a8d9-7c6c2796d077.jpg?1675957049",
      },
      mana_cost: "{1}{B}",
      name: "Sheoldred's Edict",
      oracle_text:
        "Choose one —\n• Each opponent sacrifices a nontoken creature.\n• Each opponent sacrifices a creature token.\n• Each opponent sacrifices a planeswalker.",
      rarity: "uncommon",
      reserved: false,
      set: "one",
      set_name: "Phyrexia: All Will Be One",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "e38192e5-814f-4269-bae8-13867a73e7fa",
      object: "card",
      tcgplayer_id: 13417,
      artist: "Hideaki Takamura",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/e/3/e38192e5-814f-4269-bae8-13867a73e7fa.jpg?1682382185",
        normal:
          "https://cards.scryfall.io/normal/front/e/3/e38192e5-814f-4269-bae8-13867a73e7fa.jpg?1682382185",
        large:
          "https://cards.scryfall.io/large/front/e/3/e38192e5-814f-4269-bae8-13867a73e7fa.jpg?1682382185",
        png: "https://cards.scryfall.io/png/front/e/3/e38192e5-814f-4269-bae8-13867a73e7fa.png?1682382185",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/e/3/e38192e5-814f-4269-bae8-13867a73e7fa.jpg?1682382185",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/e/3/e38192e5-814f-4269-bae8-13867a73e7fa.jpg?1682382185",
      },
      mana_cost: "{1}{B}",
      name: "Shred Memory",
      oracle_text:
        "Exile up to four target cards from a single graveyard.\nTransmute {1}{B}{B} ({1}{B}{B}, Discard this card: Search your library for a card with the same mana value as this card, reveal it, put it into your hand, then shuffle. Transmute only as a sorcery.)",
      rarity: "common",
      reserved: false,
      set: "rav",
      set_name: "Ravnica: City of Guilds",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "61388c28-9428-473c-973a-0a82b6b83d62",
      object: "card",
      tcgplayer_id: 166945,
      artist: "Howard Lyon",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/6/1/61388c28-9428-473c-973a-0a82b6b83d62.jpg?1562274085",
        normal:
          "https://cards.scryfall.io/normal/front/6/1/61388c28-9428-473c-973a-0a82b6b83d62.jpg?1562274085",
        large:
          "https://cards.scryfall.io/large/front/6/1/61388c28-9428-473c-973a-0a82b6b83d62.jpg?1562274085",
        png: "https://cards.scryfall.io/png/front/6/1/61388c28-9428-473c-973a-0a82b6b83d62.png?1562274085",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/6/1/61388c28-9428-473c-973a-0a82b6b83d62.jpg?1562274085",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/6/1/61388c28-9428-473c-973a-0a82b6b83d62.jpg?1562274085",
      },
      mana_cost: "{B}{B}",
      name: "Sign in Blood",
      oracle_text: "Target player draws two cards and loses 2 life.",
      rarity: "common",
      reserved: false,
      set: "cm2",
      set_name: "Commander Anthology Volume II",
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "a36fd6d8-66a2-49d1-b9f3-b400ebc03674",
      object: "card",
      tcgplayer_id: 492032,
      artist: "Luca Zontini",
      cmc: 1,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/a/3/a36fd6d8-66a2-49d1-b9f3-b400ebc03674.jpg?1682210228",
        normal:
          "https://cards.scryfall.io/normal/front/a/3/a36fd6d8-66a2-49d1-b9f3-b400ebc03674.jpg?1682210228",
        large:
          "https://cards.scryfall.io/large/front/a/3/a36fd6d8-66a2-49d1-b9f3-b400ebc03674.jpg?1682210228",
        png: "https://cards.scryfall.io/png/front/a/3/a36fd6d8-66a2-49d1-b9f3-b400ebc03674.png?1682210228",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/a/3/a36fd6d8-66a2-49d1-b9f3-b400ebc03674.jpg?1682210228",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/a/3/a36fd6d8-66a2-49d1-b9f3-b400ebc03674.jpg?1682210228",
      },
      mana_cost: "{1}",
      name: "Skullclamp",
      oracle_text:
        "Equipped creature gets +1/-1.\nWhenever equipped creature dies, draw two cards.\nEquip {1}",
      rarity: "uncommon",
      reserved: false,
      set: "moc",
      set_name: "March of the Machine Commander",
      type_line: "Artifact — Equipment",
    },
    {
      layout: "normal",
      lang: "en",
      id: "eca9ae7b-a6d9-43ea-92d4-0110fd6643a7",
      object: "card",
      tcgplayer_id: 491375,
      artist: "Mike Bierek",
      cmc: 1,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/e/c/eca9ae7b-a6d9-43ea-92d4-0110fd6643a7.jpg?1682210247",
        normal:
          "https://cards.scryfall.io/normal/front/e/c/eca9ae7b-a6d9-43ea-92d4-0110fd6643a7.jpg?1682210247",
        large:
          "https://cards.scryfall.io/large/front/e/c/eca9ae7b-a6d9-43ea-92d4-0110fd6643a7.jpg?1682210247",
        png: "https://cards.scryfall.io/png/front/e/c/eca9ae7b-a6d9-43ea-92d4-0110fd6643a7.png?1682210247",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/e/c/eca9ae7b-a6d9-43ea-92d4-0110fd6643a7.jpg?1682210247",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/e/c/eca9ae7b-a6d9-43ea-92d4-0110fd6643a7.jpg?1682210247",
      },
      mana_cost: "{1}",
      name: "Sol Ring",
      oracle_text: "{T}: Add {C}{C}.",
      rarity: "uncommon",
      reserved: false,
      set: "moc",
      set_name: "March of the Machine Commander",
      type_line: "Artifact",
    },
    {
      layout: "normal",
      lang: "en",
      id: "d6a3672f-c0d3-4504-8886-e50cd30295be",
      object: "card",
      tcgplayer_id: 282950,
      artist: "Donato Giancola",
      cmc: 4,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/d/6/d6a3672f-c0d3-4504-8886-e50cd30295be.jpg?1673305866",
        normal:
          "https://cards.scryfall.io/normal/front/d/6/d6a3672f-c0d3-4504-8886-e50cd30295be.jpg?1673305866",
        large:
          "https://cards.scryfall.io/large/front/d/6/d6a3672f-c0d3-4504-8886-e50cd30295be.jpg?1673305866",
        png: "https://cards.scryfall.io/png/front/d/6/d6a3672f-c0d3-4504-8886-e50cd30295be.png?1673305866",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/d/6/d6a3672f-c0d3-4504-8886-e50cd30295be.jpg?1673305866",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/d/6/d6a3672f-c0d3-4504-8886-e50cd30295be.jpg?1673305866",
      },
      mana_cost: "{4}",
      name: "Solemn Simulacrum",
      oracle_text:
        "When Solemn Simulacrum enters the battlefield, you may search your library for a basic land card, put that card onto the battlefield tapped, then shuffle.\nWhen Solemn Simulacrum dies, you may draw a card.",
      power: "2",
      rarity: "rare",
      reserved: false,
      set: "dmc",
      set_name: "Dominaria United Commander",
      toughness: "2",
      type_line: "Artifact Creature — Golem",
    },
    {
      layout: "normal",
      lang: "en",
      id: "2c2fb07b-0f70-403b-be8b-b5217f12e671",
      object: "card",
      tcgplayer_id: 221926,
      artist: "Wylie Beckert",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/2/c/2c2fb07b-0f70-403b-be8b-b5217f12e671.jpg?1604196615",
        normal:
          "https://cards.scryfall.io/normal/front/2/c/2c2fb07b-0f70-403b-be8b-b5217f12e671.jpg?1604196615",
        large:
          "https://cards.scryfall.io/large/front/2/c/2c2fb07b-0f70-403b-be8b-b5217f12e671.jpg?1604196615",
        png: "https://cards.scryfall.io/png/front/2/c/2c2fb07b-0f70-403b-be8b-b5217f12e671.png?1604196615",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/2/c/2c2fb07b-0f70-403b-be8b-b5217f12e671.jpg?1604196615",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/2/c/2c2fb07b-0f70-403b-be8b-b5217f12e671.jpg?1604196615",
      },
      mana_cost: "{2}{B}",
      name: "Soul Shatter",
      oracle_text:
        "Each opponent sacrifices a creature or planeswalker with the highest mana value among creatures and planeswalkers they control.",
      rarity: "rare",
      reserved: false,
      set: "znr",
      set_name: "Zendikar Rising",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "2974e18b-be17-4059-9f29-7afe1d1a51eb",
      object: "card",
      tcgplayer_id: 120543,
      artist: "Winona Nelson",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/2/9/2974e18b-be17-4059-9f29-7afe1d1a51eb.jpg?1576384434",
        normal:
          "https://cards.scryfall.io/normal/front/2/9/2974e18b-be17-4059-9f29-7afe1d1a51eb.jpg?1576384434",
        large:
          "https://cards.scryfall.io/large/front/2/9/2974e18b-be17-4059-9f29-7afe1d1a51eb.jpg?1576384434",
        png: "https://cards.scryfall.io/png/front/2/9/2974e18b-be17-4059-9f29-7afe1d1a51eb.png?1576384434",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/2/9/2974e18b-be17-4059-9f29-7afe1d1a51eb.jpg?1576384434",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/2/9/2974e18b-be17-4059-9f29-7afe1d1a51eb.jpg?1576384434",
      },
      mana_cost: "{1}{B}{B}",
      name: "Succumb to Temptation",
      oracle_text: "You draw two cards and you lose 2 life.",
      rarity: "common",
      reserved: false,
      set: "emn",
      set_name: "Eldritch Moon",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "888cdb76-d365-41df-8b6a-378ac58ca8b2",
      object: "card",
      tcgplayer_id: 490470,
      artist: "Sam Burley",
      cmc: 0,
      colors: [],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/8/8/888cdb76-d365-41df-8b6a-378ac58ca8b2.jpg?1682205955",
        normal:
          "https://cards.scryfall.io/normal/front/8/8/888cdb76-d365-41df-8b6a-378ac58ca8b2.jpg?1682205955",
        large:
          "https://cards.scryfall.io/large/front/8/8/888cdb76-d365-41df-8b6a-378ac58ca8b2.jpg?1682205955",
        png: "https://cards.scryfall.io/png/front/8/8/888cdb76-d365-41df-8b6a-378ac58ca8b2.png?1682205955",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/8/8/888cdb76-d365-41df-8b6a-378ac58ca8b2.jpg?1682205955",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/8/8/888cdb76-d365-41df-8b6a-378ac58ca8b2.jpg?1682205955",
      },
      mana_cost: "",
      name: "Swamp",
      oracle_text: "({T}: Add {B}.)",
      rarity: "common",
      reserved: false,
      set: "mom",
      set_name: "March of the Machine",
      type_line: "Basic Land — Swamp",
    },
    {
      layout: "normal",
      lang: "en",
      id: "2daa3621-8a2c-4b4b-87ac-f981192a0567",
      object: "card",
      tcgplayer_id: 478553,
      artist: "Scott Murphy",
      cmc: 3,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/2/d/2daa3621-8a2c-4b4b-87ac-f981192a0567.jpg?1675957256",
        normal:
          "https://cards.scryfall.io/normal/front/2/d/2daa3621-8a2c-4b4b-87ac-f981192a0567.jpg?1675957256",
        large:
          "https://cards.scryfall.io/large/front/2/d/2daa3621-8a2c-4b4b-87ac-f981192a0567.jpg?1675957256",
        png: "https://cards.scryfall.io/png/front/2/d/2daa3621-8a2c-4b4b-87ac-f981192a0567.png?1675957256",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/2/d/2daa3621-8a2c-4b4b-87ac-f981192a0567.jpg?1675957256",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/2/d/2daa3621-8a2c-4b4b-87ac-f981192a0567.jpg?1675957256",
      },
      mana_cost: "{3}",
      name: "Sword of Forge and Frontier",
      oracle_text:
        "Equipped creature gets +2/+2 and has protection from red and from green.\nWhenever equipped creature deals combat damage to a player, exile the top two cards of your library. You may play those cards this turn. You may play an additional land this turn.\nEquip {2}",
      rarity: "mythic",
      reserved: false,
      set: "one",
      set_name: "Phyrexia: All Will Be One",
      type_line: "Artifact — Equipment",
    },
    {
      layout: "normal",
      lang: "en",
      id: "3bfa6b8c-6e4b-42fa-9f6c-40c95e162b9a",
      object: "card",
      tcgplayer_id: 243878,
      artist: "Daniel Ljunggren",
      cmc: 2,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/3/b/3bfa6b8c-6e4b-42fa-9f6c-40c95e162b9a.jpg?1631589231",
        normal:
          "https://cards.scryfall.io/normal/front/3/b/3bfa6b8c-6e4b-42fa-9f6c-40c95e162b9a.jpg?1631589231",
        large:
          "https://cards.scryfall.io/large/front/3/b/3bfa6b8c-6e4b-42fa-9f6c-40c95e162b9a.jpg?1631589231",
        png: "https://cards.scryfall.io/png/front/3/b/3bfa6b8c-6e4b-42fa-9f6c-40c95e162b9a.png?1631589231",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/3/b/3bfa6b8c-6e4b-42fa-9f6c-40c95e162b9a.jpg?1631589231",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/3/b/3bfa6b8c-6e4b-42fa-9f6c-40c95e162b9a.jpg?1631589231",
      },
      mana_cost: "{2}",
      name: "Sword of the Animist",
      oracle_text:
        "Equipped creature gets +1/+1.\nWhenever equipped creature attacks, you may search your library for a basic land card, put it onto the battlefield tapped, then shuffle.\nEquip {2}",
      rarity: "rare",
      reserved: false,
      set: "afc",
      set_name: "Forgotten Realms Commander",
      type_line: "Legendary Artifact — Equipment",
    },
    {
      layout: "normal",
      lang: "en",
      id: "499037cc-a577-41cb-8ca2-5e117945634f",
      object: "card",
      tcgplayer_id: 262420,
      artist: "Sam Burley",
      cmc: 0,
      colors: [],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/4/9/499037cc-a577-41cb-8ca2-5e117945634f.jpg?1654569039",
        normal:
          "https://cards.scryfall.io/normal/front/4/9/499037cc-a577-41cb-8ca2-5e117945634f.jpg?1654569039",
        large:
          "https://cards.scryfall.io/large/front/4/9/499037cc-a577-41cb-8ca2-5e117945634f.jpg?1654569039",
        png: "https://cards.scryfall.io/png/front/4/9/499037cc-a577-41cb-8ca2-5e117945634f.png?1654569039",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/4/9/499037cc-a577-41cb-8ca2-5e117945634f.jpg?1654569039",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/4/9/499037cc-a577-41cb-8ca2-5e117945634f.jpg?1654569039",
      },
      mana_cost: "",
      name: "Takenuma, Abandoned Mire",
      oracle_text:
        "{T}: Add {B}.\nChannel — {3}{B}, Discard Takenuma, Abandoned Mire: Mill three cards, then return a creature or planeswalker card from your graveyard to your hand. This ability costs {1} less to activate for each legendary creature you control.",
      rarity: "rare",
      reserved: false,
      set: "neo",
      set_name: "Kamigawa: Neon Dynasty",
      type_line: "Legendary Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "f40e9f0f-8c0d-4bfd-9872-370ce3763006",
      object: "card",
      tcgplayer_id: 273561,
      artist: "Alan Pollack",
      cmc: 0,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/f/4/f40e9f0f-8c0d-4bfd-9872-370ce3763006.jpg?1674143173",
        normal:
          "https://cards.scryfall.io/normal/front/f/4/f40e9f0f-8c0d-4bfd-9872-370ce3763006.jpg?1674143173",
        large:
          "https://cards.scryfall.io/large/front/f/4/f40e9f0f-8c0d-4bfd-9872-370ce3763006.jpg?1674143173",
        png: "https://cards.scryfall.io/png/front/f/4/f40e9f0f-8c0d-4bfd-9872-370ce3763006.png?1674143173",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/f/4/f40e9f0f-8c0d-4bfd-9872-370ce3763006.jpg?1674143173",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/f/4/f40e9f0f-8c0d-4bfd-9872-370ce3763006.jpg?1674143173",
      },
      mana_cost: "",
      name: "Terrain Generator",
      oracle_text:
        "{T}: Add {C}.\n{2}, {T}: You may put a basic land card from your hand onto the battlefield tapped.",
      rarity: "uncommon",
      reserved: false,
      set: "clb",
      set_name: "Commander Legends: Battle for Baldur's Gate",
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "08950015-eee5-4327-888c-82dfd13bb9ad",
      object: "card",
      tcgplayer_id: 248212,
      artist: "Chris Seaman",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/0/8/08950015-eee5-4327-888c-82dfd13bb9ad.jpg?1667629608",
        normal:
          "https://cards.scryfall.io/normal/front/0/8/08950015-eee5-4327-888c-82dfd13bb9ad.jpg?1667629608",
        large:
          "https://cards.scryfall.io/large/front/0/8/08950015-eee5-4327-888c-82dfd13bb9ad.jpg?1667629608",
        png: "https://cards.scryfall.io/png/front/0/8/08950015-eee5-4327-888c-82dfd13bb9ad.png?1667629608",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/0/8/08950015-eee5-4327-888c-82dfd13bb9ad.jpg?1667629608",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/0/8/08950015-eee5-4327-888c-82dfd13bb9ad.jpg?1667629608",
      },
      mana_cost: "{X}{B}{B}",
      name: "The Meathook Massacre",
      oracle_text:
        "When The Meathook Massacre enters the battlefield, each creature gets -X/-X until end of turn.\nWhenever a creature you control dies, each opponent loses 1 life.\nWhenever a creature an opponent controls dies, you gain 1 life.",
      rarity: "mythic",
      reserved: false,
      set: "mid",
      set_name: "Innistrad: Midnight Hunt",
      type_line: "Legendary Enchantment",
    },
    {
      layout: "normal",
      lang: "en",
      id: "269a926d-7788-4668-8bd8-7572dbf5f5eb",
      object: "card",
      tcgplayer_id: 218436,
      artist: "John Avon",
      cmc: 0,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/2/6/269a926d-7788-4668-8bd8-7572dbf5f5eb.jpg?1599710662",
        normal:
          "https://cards.scryfall.io/normal/front/2/6/269a926d-7788-4668-8bd8-7572dbf5f5eb.jpg?1599710662",
        large:
          "https://cards.scryfall.io/large/front/2/6/269a926d-7788-4668-8bd8-7572dbf5f5eb.jpg?1599710662",
        png: "https://cards.scryfall.io/png/front/2/6/269a926d-7788-4668-8bd8-7572dbf5f5eb.png?1599710662",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/2/6/269a926d-7788-4668-8bd8-7572dbf5f5eb.jpg?1599710662",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/2/6/269a926d-7788-4668-8bd8-7572dbf5f5eb.jpg?1599710662",
      },
      mana_cost: "",
      name: "Thespian's Stage",
      oracle_text:
        "{T}: Add {C}.\n{2}, {T}: Thespian's Stage becomes a copy of target land, except it has this ability.",
      rarity: "rare",
      reserved: false,
      set: "2xm",
      set_name: "Double Masters",
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "10e9cbf2-99ed-4f70-8744-b9a08a5f5f42",
      object: "card",
      tcgplayer_id: 273503,
      artist: "rk post",
      cmc: 2,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/1/0/10e9cbf2-99ed-4f70-8744-b9a08a5f5f42.jpg?1674142776",
        normal:
          "https://cards.scryfall.io/normal/front/1/0/10e9cbf2-99ed-4f70-8744-b9a08a5f5f42.jpg?1674142776",
        large:
          "https://cards.scryfall.io/large/front/1/0/10e9cbf2-99ed-4f70-8744-b9a08a5f5f42.jpg?1674142776",
        png: "https://cards.scryfall.io/png/front/1/0/10e9cbf2-99ed-4f70-8744-b9a08a5f5f42.png?1674142776",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/1/0/10e9cbf2-99ed-4f70-8744-b9a08a5f5f42.jpg?1674142776",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/1/0/10e9cbf2-99ed-4f70-8744-b9a08a5f5f42.jpg?1674142776",
      },
      mana_cost: "{2}",
      name: "Thought Vessel",
      oracle_text: "You have no maximum hand size.\n{T}: Add {C}.",
      rarity: "uncommon",
      reserved: false,
      set: "clb",
      set_name: "Commander Legends: Battle for Baldur's Gate",
      type_line: "Artifact",
    },
    {
      layout: "normal",
      lang: "en",
      id: "20b4d2f6-c49c-45d7-b172-2628d336e843",
      object: "card",
      tcgplayer_id: 167837,
      artist: "Alex Konstad",
      cmc: 5,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/2/0/20b4d2f6-c49c-45d7-b172-2628d336e843.jpg?1562901501",
        normal:
          "https://cards.scryfall.io/normal/front/2/0/20b4d2f6-c49c-45d7-b172-2628d336e843.jpg?1562901501",
        large:
          "https://cards.scryfall.io/large/front/2/0/20b4d2f6-c49c-45d7-b172-2628d336e843.jpg?1562901501",
        png: "https://cards.scryfall.io/png/front/2/0/20b4d2f6-c49c-45d7-b172-2628d336e843.png?1562901501",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/2/0/20b4d2f6-c49c-45d7-b172-2628d336e843.jpg?1562901501",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/2/0/20b4d2f6-c49c-45d7-b172-2628d336e843.jpg?1562901501",
      },
      mana_cost: "{4}{B}",
      name: "Thrilling Encore",
      oracle_text:
        "Put onto the battlefield under your control all creature cards in all graveyards that were put there from the battlefield this turn.",
      rarity: "rare",
      reserved: false,
      set: "bbd",
      set_name: "Battlebond",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "f69d77d1-5980-436c-bf48-790939b069aa",
      object: "card",
      tcgplayer_id: 135074,
      artist: "Grzegorz Rutkowski",
      cmc: 2,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/f/6/f69d77d1-5980-436c-bf48-790939b069aa.jpg?1562820191",
        normal:
          "https://cards.scryfall.io/normal/front/f/6/f69d77d1-5980-436c-bf48-790939b069aa.jpg?1562820191",
        large:
          "https://cards.scryfall.io/large/front/f/6/f69d77d1-5980-436c-bf48-790939b069aa.jpg?1562820191",
        png: "https://cards.scryfall.io/png/front/f/6/f69d77d1-5980-436c-bf48-790939b069aa.png?1562820191",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/f/6/f69d77d1-5980-436c-bf48-790939b069aa.jpg?1562820191",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/f/6/f69d77d1-5980-436c-bf48-790939b069aa.jpg?1562820191",
      },
      mana_cost: "{X}{B}{B}",
      name: "Torment of Hailfire",
      oracle_text:
        "Repeat the following process X times. Each opponent loses 3 life unless that player sacrifices a nonland permanent or discards a card.",
      rarity: "rare",
      reserved: false,
      set: "hou",
      set_name: "Hour of Devastation",
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "db34617f-b04f-4b65-84cf-5c5be1eb7226",
      object: "card",
      tcgplayer_id: 247526,
      artist: "Yeong-Hao Han",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/d/b/db34617f-b04f-4b65-84cf-5c5be1eb7226.jpg?1651951814",
        normal:
          "https://cards.scryfall.io/normal/front/d/b/db34617f-b04f-4b65-84cf-5c5be1eb7226.jpg?1651951814",
        large:
          "https://cards.scryfall.io/large/front/d/b/db34617f-b04f-4b65-84cf-5c5be1eb7226.jpg?1651951814",
        png: "https://cards.scryfall.io/png/front/d/b/db34617f-b04f-4b65-84cf-5c5be1eb7226.png?1651951814",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/d/b/db34617f-b04f-4b65-84cf-5c5be1eb7226.jpg?1651951814",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/d/b/db34617f-b04f-4b65-84cf-5c5be1eb7226.jpg?1651951814",
      },
      mana_cost: "{2}{B}",
      name: "Toxic Deluge",
      oracle_text:
        "As an additional cost to cast this spell, pay X life.\nAll creatures get -X/-X until end of turn.",
      rarity: "rare",
      reserved: false,
      set: "cc2",
      set_name: "Commander Collection: Black",
      type_line: "Sorcery",
    },
    {
      layout: "normal",
      lang: "en",
      id: "c3140bf5-9846-47ae-8142-b013aac14609",
      object: "card",
      tcgplayer_id: 118750,
      artist: "Christopher Moeller",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/c/3/c3140bf5-9846-47ae-8142-b013aac14609.jpg?1580014388",
        normal:
          "https://cards.scryfall.io/normal/front/c/3/c3140bf5-9846-47ae-8142-b013aac14609.jpg?1580014388",
        large:
          "https://cards.scryfall.io/large/front/c/3/c3140bf5-9846-47ae-8142-b013aac14609.jpg?1580014388",
        png: "https://cards.scryfall.io/png/front/c/3/c3140bf5-9846-47ae-8142-b013aac14609.png?1580014388",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/c/3/c3140bf5-9846-47ae-8142-b013aac14609.jpg?1580014388",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/c/3/c3140bf5-9846-47ae-8142-b013aac14609.jpg?1580014388",
      },
      mana_cost: "{B}",
      name: "Tragic Slip",
      oracle_text:
        "Target creature gets -1/-1 until end of turn.\nMorbid — That creature gets -13/-13 until end of turn instead if a creature died this turn.",
      rarity: "common",
      reserved: false,
      set: "ema",
      set_name: "Eternal Masters",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "18bd50f2-c3ba-4217-a2d5-bb771e199706",
      object: "card",
      tcgplayer_id: 226134,
      artist: "Raymond Swanland",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/1/8/18bd50f2-c3ba-4217-a2d5-bb771e199706.jpg?1608910005",
        normal:
          "https://cards.scryfall.io/normal/front/1/8/18bd50f2-c3ba-4217-a2d5-bb771e199706.jpg?1608910005",
        large:
          "https://cards.scryfall.io/large/front/1/8/18bd50f2-c3ba-4217-a2d5-bb771e199706.jpg?1608910005",
        png: "https://cards.scryfall.io/png/front/1/8/18bd50f2-c3ba-4217-a2d5-bb771e199706.png?1608910005",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/1/8/18bd50f2-c3ba-4217-a2d5-bb771e199706.jpg?1608910005",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/1/8/18bd50f2-c3ba-4217-a2d5-bb771e199706.jpg?1608910005",
      },
      mana_cost: "{B}",
      name: "Vampiric Tutor",
      oracle_text:
        "Search your library for a card, then shuffle and put that card on top. You lose 2 life.",
      rarity: "mythic",
      reserved: false,
      set: "cmr",
      set_name: "Commander Legends",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "0fab9ee8-776a-48e5-b309-bcd381e67bf7",
      object: "card",
      tcgplayer_id: 230172,
      artist: "Igor Kieryluk",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/0/f/0fab9ee8-776a-48e5-b309-bcd381e67bf7.jpg?1631048783",
        normal:
          "https://cards.scryfall.io/normal/front/0/f/0fab9ee8-776a-48e5-b309-bcd381e67bf7.jpg?1631048783",
        large:
          "https://cards.scryfall.io/large/front/0/f/0fab9ee8-776a-48e5-b309-bcd381e67bf7.jpg?1631048783",
        png: "https://cards.scryfall.io/png/front/0/f/0fab9ee8-776a-48e5-b309-bcd381e67bf7.png?1631048783",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/0/f/0fab9ee8-776a-48e5-b309-bcd381e67bf7.jpg?1631048783",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/0/f/0fab9ee8-776a-48e5-b309-bcd381e67bf7.jpg?1631048783",
      },
      mana_cost: "{B}",
      name: "Village Rites",
      oracle_text:
        "As an additional cost to cast this spell, sacrifice a creature.\nDraw two cards.",
      rarity: "common",
      reserved: false,
      set: "khm",
      set_name: "Kaldheim",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "aab958d5-9c1f-420f-b358-ec0325f22f84",
      object: "card",
      tcgplayer_id: 155570,
      artist: "Zack Stella",
      cmc: 3,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/a/a/aab958d5-9c1f-420f-b358-ec0325f22f84.jpg?1555040347",
        normal:
          "https://cards.scryfall.io/normal/front/a/a/aab958d5-9c1f-420f-b358-ec0325f22f84.jpg?1555040347",
        large:
          "https://cards.scryfall.io/large/front/a/a/aab958d5-9c1f-420f-b358-ec0325f22f84.jpg?1555040347",
        png: "https://cards.scryfall.io/png/front/a/a/aab958d5-9c1f-420f-b358-ec0325f22f84.png?1555040347",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/a/a/aab958d5-9c1f-420f-b358-ec0325f22f84.jpg?1555040347",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/a/a/aab958d5-9c1f-420f-b358-ec0325f22f84.jpg?1555040347",
      },
      mana_cost: "{2}{B}",
      name: "Vona's Hunger",
      oracle_text:
        "Ascend (If you control ten or more permanents, you get the city's blessing for the rest of the game.)\nEach opponent sacrifices a creature. If you have the city's blessing, instead each opponent sacrifices half the creatures they control, rounded up.",
      rarity: "rare",
      reserved: false,
      set: "rix",
      set_name: "Rivals of Ixalan",
      type_line: "Instant",
    },
    {
      layout: "normal",
      lang: "en",
      id: "ed5cebc0-6a58-468d-a75e-46087ea2eb46",
      object: "card",
      tcgplayer_id: 273755,
      artist: "Milivoj Ćeran",
      cmc: 0,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/e/d/ed5cebc0-6a58-468d-a75e-46087ea2eb46.jpg?1674143209",
        normal:
          "https://cards.scryfall.io/normal/front/e/d/ed5cebc0-6a58-468d-a75e-46087ea2eb46.jpg?1674143209",
        large:
          "https://cards.scryfall.io/large/front/e/d/ed5cebc0-6a58-468d-a75e-46087ea2eb46.jpg?1674143209",
        png: "https://cards.scryfall.io/png/front/e/d/ed5cebc0-6a58-468d-a75e-46087ea2eb46.png?1674143209",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/e/d/ed5cebc0-6a58-468d-a75e-46087ea2eb46.jpg?1674143209",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/e/d/ed5cebc0-6a58-468d-a75e-46087ea2eb46.jpg?1674143209",
      },
      mana_cost: "",
      name: "War Room",
      oracle_text:
        "{T}: Add {C}.\n{3}, {T}, Pay life equal to the number of colors in your commanders' color identity: Draw a card.",
      rarity: "rare",
      reserved: false,
      set: "clb",
      set_name: "Commander Legends: Battle for Baldur's Gate",
      type_line: "Land",
    },
    {
      layout: "normal",
      lang: "en",
      id: "2498c2d5-c7b8-47ad-8a13-b92d36b5db10",
      object: "card",
      tcgplayer_id: 491369,
      artist: "Tomas Duchek",
      cmc: 1,
      colors: [],
      color_identity: [],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/2/4/2498c2d5-c7b8-47ad-8a13-b92d36b5db10.jpg?1682210319",
        normal:
          "https://cards.scryfall.io/normal/front/2/4/2498c2d5-c7b8-47ad-8a13-b92d36b5db10.jpg?1682210319",
        large:
          "https://cards.scryfall.io/large/front/2/4/2498c2d5-c7b8-47ad-8a13-b92d36b5db10.jpg?1682210319",
        png: "https://cards.scryfall.io/png/front/2/4/2498c2d5-c7b8-47ad-8a13-b92d36b5db10.png?1682210319",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/2/4/2498c2d5-c7b8-47ad-8a13-b92d36b5db10.jpg?1682210319",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/2/4/2498c2d5-c7b8-47ad-8a13-b92d36b5db10.jpg?1682210319",
      },
      mana_cost: "{1}",
      name: "Wayfarer's Bauble",
      oracle_text:
        "{2}, {T}, Sacrifice Wayfarer's Bauble: Search your library for a basic land card, put that card onto the battlefield tapped, then shuffle.",
      rarity: "common",
      reserved: false,
      set: "moc",
      set_name: "March of the Machine Commander",
      type_line: "Artifact",
    },
    {
      layout: "normal",
      lang: "en",
      id: "768727ce-4f84-4527-8d69-3c9b7877b748",
      object: "card",
      tcgplayer_id: 262611,
      artist: "Zoltan Boros",
      cmc: 1,
      colors: ["B"],
      color_identity: ["B"],
      image_uris: {
        small:
          "https://cards.scryfall.io/small/front/7/6/768727ce-4f84-4527-8d69-3c9b7877b748.jpg?1654567474",
        normal:
          "https://cards.scryfall.io/normal/front/7/6/768727ce-4f84-4527-8d69-3c9b7877b748.jpg?1654567474",
        large:
          "https://cards.scryfall.io/large/front/7/6/768727ce-4f84-4527-8d69-3c9b7877b748.jpg?1654567474",
        png: "https://cards.scryfall.io/png/front/7/6/768727ce-4f84-4527-8d69-3c9b7877b748.png?1654567474",
        art_crop:
          "https://cards.scryfall.io/art_crop/front/7/6/768727ce-4f84-4527-8d69-3c9b7877b748.jpg?1654567474",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/7/6/768727ce-4f84-4527-8d69-3c9b7877b748.jpg?1654567474",
      },
      mana_cost: "{B}",
      name: "You Are Already Dead",
      oracle_text:
        "Destroy target creature that was dealt damage this turn.\nDraw a card.",
      rarity: "common",
      reserved: false,
      set: "neo",
      set_name: "Kamigawa: Neon Dynasty",
      type_line: "Instant",
    },

    // "1 Aetherflux Reservoir (BRR) 65 *F*",
    // "1 Animate Dead (5ED) 140",
    // "1 Bile Blight (F14) 8 *F*",
    // "1 Bitterblossom (SLD) 12",
    // "1 Black Market Connections (CLB) 620",
    // "1 Blood Pact (DBL) 88 *F*",
    // "1 Bolas's Citadel (PWAR) 79 *F*",
    // "1 Boseiju, Who Shelters All (SLD) 426 *F*",
    // "1 Bubbling Muck (UDS) 54",
    // "1 Cabal Coffers (MH2) 301",
    // "1 Cabal Ritual (TOR) 51",
    // "1 Cabal Stronghold (DOM) 238",
    // "1 Castle Locthwain (PELD) 241p *F*",
    // "1 Cling to Dust (THB) 87 *F*",
    // "1 Crypt Ghast (GTC) 61",
    // "1 Cut Down (DMU) 89 *F*",
    // "1 Dark Ritual (STA) 89 *F*",
    // "1 Debt to the Kami (NEO) 92 *F*",
    // "1 Defile (MH1) 86",
    // "1 Demolition Field (BRO) 260 *F*",
    // "1 Demonic Tutor (STA) 90 *F*",
    // "1 Detection Tower (M19) 249",
    // "1 Doom Blade (STA) 91 *F*",
    // "1 Entomb (DMR) 304 *F*",
    // "1 Expedition Map (2XM) 255",
    // "1 Exsanguinate (MB1) 651",
    // "1 Feed the Swarm (ZNR) 102 *F*",
    // "1 Forbidden Orchard (2X2) 323 *F*",
    // "1 Ghost Quarter (SLD) 679 *F*",
    // "1 Grim Return (M14) 100",
    // "1 Hagra Mauling / Hagra Broodpit (ZNR) 106 *F*",
    // "1 Hall of the Bandit Lord (SLD) 427 *F*",
    // "1 Heartless Act (IKO) 91",
    // "1 Hoarding Broodlord (MOM) 360 *F*",
    // "1 Hostile Negotiations (BRO) 329 *F*",
    // "1 Infernal Grasp (MID) 389 *F*",
    // "1 Invoke Despair (NEO) 455 *F*",
    // "1 Jet Medallion (PLIST) 642",
    // "1 K'rrik, Son of Yawgmoth (C19) 18",
    // "1 Liliana's Triumph (PWAR) 98 *F*",
    // "1 Malakir Rebirth / Malakir Mire (ZNR) 111 *F*",
    // "1 Malicious Affliction (EMA) 96",
    // "1 Massacre Wurm (M21) 316 *F*",
    // "1 Morbid Opportunist (MID) 113 *F*",
    // "1 Ophiomancer (C13) 84",
    // "1 Phyrexian Obliterator (ONE) 351 *F*",
    // "1 Primal Amulet / Primal Wellspring (PXTC) 243 *F*",
    // "1 Professor Onyx (STX) 276",
    // "1 Rankle, Master of Pranks (ELD) 101 *F*",
    // "1 Reanimate (BRB) 57",
    // "1 Saw in Half (UNF) 374 *F*",
    // "1 Sedgemoor Witch (STX) 86 *F*",
    // "1 Sensei's Divining Top (2X2) 398 *F*",
    // "1 Shadowspear (PTHB) 236s *F*",
    // "1 Sheoldred's Edict (ONE) 279 *F*",
    // "1 Shred Memory (RAV) 105",
    // "1 Sign in Blood (STA) 95",
    // "1 Skullclamp (SLD) 1112 *F*",
    // "1 Sol Ring (C21) 263",
    // "1 Solemn Simulacrum (SLD) 1113 *F*",
    // "1 Soul Shatter (ZNR) 127 *F*",
    // "1 Succumb to Temptation (EMN) 107",
    // "1 Sword of Forge and Frontier (ONE) 359 *F*",
    // "1 Sword of the Animist (ORI) 240",
    // "1 Takenuma, Abandoned Mire (NEO) 278 *F*",
    // "1 Terrain Generator (NEM) 143",
    // "1 The Meathook Massacre (MID) 112 *F*",
    // "1 Thespian's Stage (2XM) 327",
    // "1 Thought Vessel (PLG22) 2 *F*",
    // "1 Thrilling Encore (BBD) 53",
    // "1 Torment of Hailfire (PHOU) 77p",
    // "1 Toxic Deluge (2XM) 345 *F*",
    // "1 Tragic Slip (DKA) 76 *F*",
    // "1 Vampiric Tutor (DMR) 108",
    // "1 Village Rites (STA) 98 *F*",
    // "1 Vona's Hunger (RIX) 90",
    // "1 War Room (CMR) 361",
    // "1 Wayfarer's Bauble (40K) 262★ *F*",
    // "1 You Are Already Dead (NEO) 129 *F*",
    // "1 Hagra Mauling / Hagra Broodpit (ZNR) 106 *F*",
    // "1 Primal Amulet / Primal Wellspring (PXTC) 243 *F*",
  ],
};

export default toshiro;
