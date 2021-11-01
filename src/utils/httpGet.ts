import { setup } from 'axios-cache-adapter';

import config  from './../config';

const api = setup({
  baseURL: config.envs.pokeApiBaseUrl,
  method: 'GET',
  cache: {
    maxAge: +config.envs.cacheTimeout
  },
});

const httpGet = async (url: string) => {
  try {
    const res = await api.get(url);

    return res.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export default httpGet;
