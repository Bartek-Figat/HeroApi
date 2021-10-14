import axios from 'axios';

export const getBasicHeroInfoById = async (id) => {
  const { data: powerstats } = await axios.get(`/api/3725849300870585/${id}/powerstats`);
  const { data: image } = await axios.get(`/api/3725849300870585/${id}/image`);
  return { name: powerstats.name, powerstats, imgUrl: image.url, id: powerstats.id };
};

export const getFullHeroInfoById = (id) => {
  return axios.get(`/api/3725849300870585/${id}`);
};

export const searchHeroByName = (name) => {
  return axios.get(`/api/3725849300870585/search/${name}`);
};
