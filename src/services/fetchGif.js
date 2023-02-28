import { API_KEY, API_URL } from "../services/settings";

const fetchGifResponse = (response) => {
  const { data } = response;
  const gifs = data.map((gif) => {
    const { id, title } = gif;
    const { url } = gif.images.downsized_medium;
    return { id, title, url };
  });
  return gifs;
};

const fetchGif = ({ keyword = "cookie monster" } = {}) => {
  return fetch(
    `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=50`
  )
    .then((res) => res.json())
    .then((response) => fetchGifResponse(response));
};

export default fetchGif;