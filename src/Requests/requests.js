import axios from 'axios';
const  config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': ['GET', 'DELETE', 'HEAD', 'OPTIONS']
  }
};
export const getBasicHeroInfoById = async (id) => {
  const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/${id}/powerstats`, config);
  const { data: image } = await axios.get(`https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/${id}/image`, config);
  return { name: powerstats.name, powerstats, imgUrl: image.url, id: powerstats.id };
};

export const getFullHeroInfoById = (id) => {
  return axios.get(`https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/${id}`, config);
};

export const searchHeroByName = (name) => {
  return axios.get(`https://superheroapi.com/api/${process.env.REACT_APP_HEROAPI_ACCESS_TOKEN}/search/${name}`, config);
};
