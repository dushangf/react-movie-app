import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';

const App = () => {
   const [movies, setmovies] = useState([]);
   const [search, setsearch] = useState('');
   const [query, setquery] = useState('');
   const [genreID, setgenreID] = useState(0);
   const [rating, setrating] = useState(0);
   const [year, setyear] = useState(0);
   const [sort, setsort] = useState('');
   const [genres, setgenres] = useState([]);

   useEffect(() => {
      getGenre();
   }, []);

   useEffect(() => {
      const getMovies = async () => {
         const apiKey = `3bdacd18ee4d15a0aae61203ab0c0dfd`;
         const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
         );
         const data = await response.json();
         const list = data.results;
         //switch statement for different sort values
         if (sort) {
            switch (sort) {
               default:
                  setmovies(list);
                  break;
               case 'latest':
                  setmovies(
                     list.sort((a, b) => {
                        return (
                           b.release_date.split('-')[0] -
                           a.release_date.split('-')[0]
                        );
                     })
                  );
                  break;
               case 'oldest':
                  setmovies(
                     list.sort((a, b) => {
                        return (
                           a.release_date.split('-')[0] -
                           b.release_date.split('-')[0]
                        );
                     })
                  );
                  break;
               case 'highest rated':
                  setmovies(
                     list.sort((a, b) => {
                        return b.vote_average - a.vote_average;
                     })
                  );
                  break;
               case 'lowest rated':
                  setmovies(
                     list.sort((a, b) => {
                        return a.vote_average - b.vote_average;
                     })
                  );
                  break;
            }
         }
         if (!genreID && !rating && !year) {
            setmovies(list);
         } else {
            //switch statement for different combinations of filters
            switch ((genreID, rating, year)) {
               default:
                  setmovies(list);
                  break;
               case genreID !== 0 && rating >= 0 && year:
                  console.log('all');
                  setmovies(
                     list.filter(
                        (movie) =>
                           movie.vote_average >= rating &&
                           movie.genre_ids.includes(genreID) &&
                           movie.release_date.split('-')[0] >= year
                     )
                  );
                  break;
               case genreID === 0 && rating >= 0 && year:
                  console.log('this');
                  setmovies(
                     list.filter(
                        (movie) =>
                           movie.vote_average >= rating &&
                           movie.release_date.split('-')[0] >= year
                     )
                  );
                  break;
            }
         }
      };
      getMovies();
   }, [query, genreID, rating, year, sort]);

   const getGenre = async () => {
      const response = await fetch(
         'https://api.themoviedb.org/3/genre/movie/list?api_key=3bdacd18ee4d15a0aae61203ab0c0dfd&language=en-US'
      );
      const data = await response.json();
      setgenres(data.genres);
   };

   return (
      <div className="bg-black min-h-screen">
         <Search
            setgenreID={setgenreID}
            setsearch={setsearch}
            search={search}
            setquery={setquery}
            setrating={setrating}
            setyear={setyear}
            setsort={setsort}
            genres={genres}
         />
         <MovieList movies={movies} genres={genres} />
      </div>
   );
};

export default App;
