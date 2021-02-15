export const getAllAlbums = (singer) =>
	fetch(
		`https://itunes.apple.com/search?term=${singer}&media=music&entity=album&attribute=artistTerm`
	).then((response) => response.json())
