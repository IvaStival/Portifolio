
const API_KEY = 'c5daf70eb063bc06ebd70e7b11b297d4';
const URL = "https://api.themoviedb.org/3";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


const getMovies = async () => {
    const response = await fetch(URL + "/movie/popular?" + new URLSearchParams({api_key: API_KEY}))

    const data = await response.json()

    return await data.results;
}

const getSearchMovies = async (search_term) => {
    const response = await fetch( SEARCH_API + search_term)
    const data = await response.json()

    return data.results;
}

export { getMovies, getSearchMovies };