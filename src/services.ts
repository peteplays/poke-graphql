import { getMean, getMedian, getMode } from './utils/calc';
import httpGet from './utils/httpGet';

export interface INameUrl {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
}

interface ICalcData {
  pokemons: IPokemon[];
  count: number;
  height?: number[];
  weight?: number[];
}


const getPokemon = (): Promise<INameUrl[]> => httpGet(`/pokemon`);

const getPokemonByIdName = (idName: string): Promise<IPokemon> =>
  httpGet(`/pokemon/${idName.trim()}`);

const getAllPokemonByIdsNames = (idsNames: string) =>
  idsNames.split(',').map((idName) => getPokemonByIdName(idName));

const getPokemonsHeight = async (idsNames: string) => {
  const calcData: ICalcData = {
    pokemons: [],
    count: 0,
    height: [],
  };

  for (let idName of idsNames.split(',')) {
    const { id, name, height } = await getPokemonByIdName(idName);

    if (id && height) {
      calcData.pokemons.push({ id, name, height });
      calcData.height.push(height);
    } else {
      calcData.pokemons.push(notFoundResponse(idName));
    }
  }

  return buildCalcResult(calcData);
}

const getPokemonsWeight = async (idsNames: string) => {
  const calcData: ICalcData = {
    pokemons: [],
    count: 0,
    weight: [],
  };

  for (let idName of idsNames.split(',')) {
    const { id, name, weight } = await getPokemonByIdName(idName);

    if (id && weight) {
      calcData.pokemons.push({ id, name, weight });
      calcData.weight.push(weight);
    } else {
      calcData.pokemons.push(notFoundResponse(idName));
    }
  }

  return buildCalcResult(calcData);
};

const buildCalcResult = (data: ICalcData) => {
  const { pokemons, height, weight } = data;
  const calculatedData = height || weight;

  return {
    pokemons: pokemons,
    count: calculatedData.length,
    mean: getMean(calculatedData),
    median: getMedian(calculatedData),
    mode: getMode(calculatedData),
  };
};

const notFoundResponse = (idName: string) => ({ id: 0, name: `'${idName.trim()}' not found. Not included in calculations` });

export {
  getPokemon,
  getAllPokemonByIdsNames,
  getPokemonByIdName,
  getPokemonsHeight,
  getPokemonsWeight,
};
