export const searchAlbum = (ARTIST_NAME) =>
  fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`).then((res) => res.json());
