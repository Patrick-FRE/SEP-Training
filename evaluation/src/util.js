export const requestApi = (artist) => {
    
    const _url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=50`
    return fetch(_url)
}