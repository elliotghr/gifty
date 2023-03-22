import { API_KEY, API_URL } from "./settings";

const fetchSingleGifResponse = (response) => {
  const { data } = response;
    const { id, title } = data;
    const { url } = data.images.downsized_medium;
    return { id, title, url };
};

const getSingleGif = (id) => {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((response) => fetchSingleGifResponse(response));
};

export default getSingleGif;
