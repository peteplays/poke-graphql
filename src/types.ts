import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    getAllPokemon: AllPokemon
    getPokemonByIdName(idName: String!): Pokemon
    getAllPokemonByIdsNames(idsNames: String!): [Pokemon]
    getPokemonsHeight(idsNames: String!): PokemonCalc
    getPokemonsWeight(idsNames: String!): PokemonCalc
  }

  type AllPokemon {
    results: [PokemonNameUrl]
    count: Int
    previous: String
    next: String
  }

  type PokemonCalc {
    pokemons: [Pokemon]
    count: Int
    mean: Float
    median: String
    mode: String
  }

  type Pokemon {
    id: Int
    name: String
    height: Int
    weight: Int
    is_default: Boolean
    order: Int
    held_items: String
    location_area_encounters: String
    abilities: [Abilities]
    moves: [Moves]
    species: [Species]
    stats: [Stats]
    types: [Types]
  }

  type PokemonNameUrl {
    name: String
    url: String
  }

  type Abilities {
    is_hidden: Boolean
    slot: Int
    ability: Ability
  }

  type Ability {
    name: String
    url: String
  }

  type Forms {
    name: String
    url: String
  }

  type GameIndecies {
    game_index: String
    version: Version
  }

  type Version {
    name: String
    url: String
  }

  type Moves {
    move: Move
    version_group_details: [VersionGroupDetails]
  }

  type Move {
    name: String
    url: String
  }

  type VersionGroupDetails {
    level_learned_at: Int
    version_group: [VersionGroup]
    move_learned_method: [MoveLearnedMethod]
  }

  type VersionGroup {
    name: String
    url: String
  }

  type MoveLearnedMethod {
    name: String
    url: String
  }

  type Species {
    name: String
    url: String
  }

  type Stats {
    base_stat: Int
    effort: Int
    stat: [Stat]
  }

  type Stat {
    name: String
    url: String
  }

  type Types {
    slot: Int
    type: [Type]
  }

  type Type {
    name: String
    url: String
  }
`;

export default typeDefs;
