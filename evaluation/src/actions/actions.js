export const ChangeKeyword = keyword => ({
    type: 'KEYWORD',
    payload: keyword
})

export const AddAlbums = Albums => ({
    type: 'ALBUMS',
    payload: Albums
})