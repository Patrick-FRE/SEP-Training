export const iTunesAPI = (name) => {
  const artistName = name;
  const baseURL = `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=50`;
  // console.log(baseURL);
  return fetch(baseURL).then((response) => response.json());
};
