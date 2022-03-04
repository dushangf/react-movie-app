import React, { useState } from 'react';
import Modal from 'react-modal';
import MovieDetails from './MovieDetails';

const MovieList = ({ movies, genres }) => {
   const [modalIsOpen, setmodalIsOpen] = useState(false);
   const imgURL = 'https://image.tmdb.org/t/p/w500';
   const [selected, setselected] = useState({});
   const [selectedGenres, setselectedGenres] = useState([]);

   Modal.setAppElement('#root');

   const selectMovie = (movie) => {
      setselected(movie);
      setselectedGenres(
         genres.filter((genre) => movie.genre_ids.includes(Number(genre.id)))
      );
      setmodalIsOpen(true);
   };

   return (
      <div className="flex flex-wrap p-5 justify-center">
         {movies &&
            movies.map((movie) => (
               <div key={movie.id}>
                  <Modal
                     className="bg-black/90 text-white min-h-screen flex items-center"
                     isOpen={modalIsOpen}
                  >
                     <MovieDetails
                        setmodalIsOpen={setmodalIsOpen}
                        selected={selected}
                        imgURL={imgURL}
                        genres={genres}
                        selectedGenres={selectedGenres}
                     />
                  </Modal>
                  <div
                     onClick={() => selectMovie(movie)}
                     className="w-40 bg-black text-white p-4 text-center shadow-white/50 shadow-md hover:scale-110 transtion duration-150 cursor-pointer h-72 overflow-hidden"
                  >
                     <img
                        src={imgURL + movie.poster_path}
                        alt="<image not found>"
                     />
                     <h4>{movie.title}</h4>
                     <h5>
                        {movie.release_date && movie.release_date.split('-')[0]}
                     </h5>
                  </div>
               </div>
            ))}
      </div>
   );
};

export default MovieList;
