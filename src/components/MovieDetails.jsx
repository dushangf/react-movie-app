import React from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';

const MovieDetails = ({ setmodalIsOpen, selected, imgURL, selectedGenres }) => {
   return (
      <div className="bg-black w-3/5 mx-auto p-6 movie-modal flex flex-col items-end">
         <button className="close-btn" onClick={() => setmodalIsOpen(false)}>
            <FaTimes className="text-red-600 text-2xl" />
         </button>
         <div className="flex items-center w-full p-10 lg:p-10 md:p-4 flex-col md:flex-row">
            <img
               className="md:w-60 mx-auto md:mx-0 lg:mr-10 md:mr-3"
               src={imgURL + selected.poster_path}
            />
            <div className="p-2 text-center md:text-left">
               <h2 className="text-lg font-semibold">
                  {selected.title} (
                  {selected.release_date && selected.release_date.split('-')[0]}
                  )
               </h2>
               <h3 className="flex items-center justify-center md:justify-start text-2xl mt-4">
                  <FaStar className="text-yellow-600" />
                  &nbsp;
                  {selected.vote_average}
               </h3>
               <h4 className="flex mt-4 text-sm justify-center md:justify-start">
                  {selectedGenres.map((genre) => (
                     <p key={genre.id}>|&nbsp;{genre.name}&nbsp;</p>
                  ))}
                  |
               </h4>
               <h3 className="text-lg font-semibold mt-4">Sypnosis</h3>
               <p>{selected.overview}</p>
            </div>
         </div>
      </div>
   );
};

export default MovieDetails;
