import {
  getPokemon,
  getAllPokemonByIdsNames,
  getPokemonByIdName,
  getPokemonsHeight,
  getPokemonsWeight,
} from './services';

interface IIdName {
  idName: string;
}

interface IIdsNames {
  idsNames: string;
}

const resolvers = {
  Query: {
    getAllPokemon: async () => getPokemon(),
    getAllPokemonByIdsNames: async (_, args: IIdsNames) =>
      getAllPokemonByIdsNames(args.idsNames),
    getPokemonByIdName: async (_, args: IIdName) =>
      getPokemonByIdName(args.idName),
    getPokemonsHeight: async (_, args: IIdsNames) =>
      getPokemonsHeight(args.idsNames),
    getPokemonsWeight: async (_, args: IIdsNames) =>
      getPokemonsWeight(args.idsNames),
  },
};

export default resolvers;

