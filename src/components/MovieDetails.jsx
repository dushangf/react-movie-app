import React, { useState } from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';

const MovieDetails = ({ setmodalIsOpen, selected, imgURL, genres }) => {
   return (
      <div>
         <div className="bg-black w-4/5 mx-auto p-6 movie-modal flex flex-col items-end">
            <button className="close-btn" onClick={() => setmodalIsOpen(false)}>
               <FaTimes className="text-red-600 text-2xl" />
            </button>
            <div className="flex items-center w-full p-10">
               <img
                  className="w-60 mx-10"
                  src={imgURL + selected.poster_path}
               />
               <div className="p-2">
                  <h2 className="text-lg font-semibold">
                     {selected.title} (
                     {selected.release_date &&
                        selected.release_date.split('-')[0]}
                     )
                  </h2>
                  <h3 className="flex items-center justify-start text-2xl mt-4">
                     <FaStar className="text-yellow-600" />
                     {selected.vote_average}
                  </h3>
                  <h3 className="text-lg font-semibold mt-4">Sypnosis</h3>
                  <p>{selected.overview}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MovieDetails;
