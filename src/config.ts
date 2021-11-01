const config = {
  envs: {
    port: process.env.PORT || 7777,
    pokeApiBaseUrl: process.env.POKE_API_BASE_URL || 'https://pokeapi.co/api/v2',
    cacheTimeout: process.env.CACHE_TIMEOUT || 10 * 60 * 1000,
  },
};

export default config;
