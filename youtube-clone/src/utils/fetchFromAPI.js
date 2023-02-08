import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "6dc25858a1msh6dd38246b9600b0p1acdc3jsn89d05609c7b2",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
