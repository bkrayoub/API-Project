async function get(){
    const respons = await fetch("https://api.themoviedb.org/3/movie/550?api_key=9baa693a894bb4d509e3dbfb09db7a85")
    const data = await respons.json()
    console.log(data)
}
get()
