export const fetchMovies = async () => {

 const response = await 
   fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a2dcbae7116c39c533f91f02d29194ab')
     const result = await response.json()
       return result
}