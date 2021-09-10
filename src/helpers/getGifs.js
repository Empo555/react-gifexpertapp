





//Metodo para traer los gifs

export const getGifs = async (category) => {
    //Encode quitar espacios 
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=QvAVsdHi6YrUmj0dE6taUJoaJCYsXYkZ`
    const respuesta = await fetch(url)
    //La data de dentro de la data que traemos y la desestructuramos
    const { data } = await respuesta.json();
    //Devolvemos solo la información que necesitamos dentro del data
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    console.log(gifs);
    return gifs;

}
