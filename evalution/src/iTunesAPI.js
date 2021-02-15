const getAlbumsByArtistName = async (ARTIST_NAME) => {
  return fetch(
    `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  ).then((response) => response.json());
};

export default getAlbumsByArtistName;
