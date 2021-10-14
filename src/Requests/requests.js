import axios from 'axios';
const  config = {
  headers: {'Access-Control-Allow-Origin': '*'}
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
