const baseURL = "https://api.scryfall.com";
const searchURL = baseURL + "/cards/named";
const listURL = baseURL + "/cards/search";

export const exactSearchURL = searchURL + "?exact=";
export const fuzzySearchURL = searchURL + "?fuzzy=";
export const filteredSearchURL = listURL + "?q=";

const autoCompleteURL = baseURL + `/cards/autocomplete?q=${""}`;
