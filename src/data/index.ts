import data from './data.json';

type CharJSON = {
  [sheet: string]: CardData[];
};

type CardData = {
  c: string;
  p: string;
  h: string;
};

export default data as CharJSON;
