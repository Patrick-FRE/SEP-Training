export const getAlbums = (ARTIST_NAME:string)=>{

    const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;

    return fetch(url).then(response => response.json());
}