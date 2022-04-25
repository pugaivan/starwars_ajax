import axios from "axios";

const STARWARS_API_URL = 'https://swapi.dev/api/'
const STARWARS_IMG_URL = 'https://starwars-visualguide.com/assets/img/'

const imgTypeMap = (type) => type === 'people' ? 'characters' : type

export const starWarsRequest = async (type, id) => {
  const { data } = await axios.get(`${STARWARS_API_URL}${type}/${id}`);
  const image = `${STARWARS_IMG_URL}${imgTypeMap(type)}/${id}.jpg`;

  if (type === "people") {
    return formatPersonData(data, image);
  } else if (type === "planets") {
    return formatPlanetData(data, image);
  } else if (type === "starships") {
    return formatStarshipData(data, image);
  }
};

const formatPersonData = (data, img) => ({
  img: img,
  name: data.name,
  gender: data.gender,
  birthYear: data.birth_year,
  eyeColor: data.eye_color,
});

const formatPlanetData = (data, img) => ({
  img: img,
  name: data.name,
  diameter: data.diameter,
  terrain: data.terrain,
  population: data.population,
});

const formatStarshipData = (data, img) => ({
  img: img,
  name: data.name,
  manufacturer: data.manufacturer,
  maxSpeed: data.max_atmosphering_speed,
  cargoCap: data.cargo_capacity,
});
