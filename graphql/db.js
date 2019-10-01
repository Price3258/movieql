export let movies = [
    {
      id: 0,
      name: "Starwars",
      score:9
    },
    {
      id: 1,
      name: "Avengers",
      score:8
    },
    {
      id: 2,
      name: "Joker",
      score:10
    }
  ];

export const getMovies = () => movies;

export const getById = id => {
      const filterMovies = movies.filter(movie => movie.id ===id);
      return filterMovies[0]
  }

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if( movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
    
}

export const addMovie = (name,score) => {
    const newMovie = {
        id: movies.length+1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}
