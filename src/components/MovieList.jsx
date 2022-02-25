import React, { useState } from 'react';
import Modal from 'react-modal';
import MovieDetails from './MovieDetails';

const MovieList = ({ movies, genres }) => {
   const [modalIsOpen, setmodalIsOpen] = useState(false);
   const imgURL = 'https://image.tmdb.org/t/p/w500';
   const [selected, setselected] = useState({});

   Modal.setAppElement('#root');

   return (
      <div className="flex flex-wrap p-5 justify-center">
         {movies &&
            movies.map((movie) => (
               <div key={movie.id}>
                  <Modal
                     className="bg-black/90 text-white h-screen pt-20"
                     isOpen={modalIsOpen}
                  >
                     <MovieDetails
                        setmodalIsOpen={setmodalIsOpen}
                        selected={selected}
                        imgURL={imgURL}
                        genres={genres}
                     />
                  </Modal>
                  <div
                     onClick={() => {
                        setselected(movie);
                        setmodalIsOpen(true);
                     }}
                     className="w-40 bg-black text-white p-3 text-center shadow-indigo-900 shadow-md hover:scale-110 transtion duration-150 cursor-pointer h-72 overflow-hidden"
                  >
                     <img
                        src={imgURL + movie.poster_path}
                        alt="<image not found>"
                     />
                     <h4>{movie.title}</h4>
                     <h5>{movie.release_date.split('-')[0]}</h5>
                  </div>
               </div>
            ))}
      </div>
   );
};

export default MovieList;
