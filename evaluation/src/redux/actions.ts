export interface Album{
    name:string,
    img:string,
    artist:string
}

export const setAlbums = (albums:Album[],keyword:string) => {
    return {
        type:'set',
        payload:{
            albums,
            keyword
        }
    }
}