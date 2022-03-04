import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const Search = ({
   search,
   setsearch,
   setquery,
   setgenreID,
   setrating,
   setyear,
   setsort,
   genres,
}) => {
   return (
      <div className="w-100 p-4 flex flex-col justify-between px-8 md:flex-row items-center">
         <div className="flex flex-col md:flex-row">
            <select
               type="number"
               className="md:w-min w-60 my-2 mx-2 p-2 border-2 border-gray-800 rounded bg-black text-white"
               name="genre"
               onChange={(e) => setgenreID(Number(e.target.value))}
            >
               <option value="">--Genre--</option>
               {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                     {genre.name}
                  </option>
               ))}
            </select>
            <select
               name="rating"
               className="md:w-min w-60 my-2 mx-2 p-2 border-2 border-gray-800 rounded bg-black text-white"
               onChange={(e) => setrating(Number(e.target.value))}
            >
               <option value="">--Rating--</option>
               <option value="8">8+</option>
               <option value="6">6+</option>
               <option value="4">4+</option>
               <option value="2">2+</option>
            </select>
            <select
               name="year"
               className="md:w-min w-60 my-2 mx-2 p-2 border-2 border-gray-800 rounded bg-black text-white"
               onChange={(e) => setyear(Number(e.target.value))}
            >
               <option value="">--Year--</option>
               <option value="2020">2020</option>
               <option value="2015">2015</option>
               <option value="2010">2010</option>
               <option value="2005">2005</option>
               <option value="2000">2000</option>
            </select>
            <select
               name="sort"
               className="md:w-min w-60 my-2 mx-2 p-2 border-2 border-gray-800 rounded bg-black text-white"
               onChange={(e) => setsort(e.target.value)}
            >
               <option value="">--Sort by--</option>
               <option value="latest">Latest</option>
               <option value="oldest">Oldest</option>
               <option value="highest rated">Highest Rated</option>
               <option value="lowest rated">Lowest Rated</option>
            </select>
         </div>
         <div className="w-60">
            <form
               className="flex border-2 border-gray-800 rounded"
               onSubmit={(e) => {
                  e.preventDefault();
                  setquery(search);
               }}
            >
               <input
                  className="p-2 px-3 bg-black text-white"
                  type="text"
                  onChange={(e) => setsearch(e.target.value)}
               />
               <button className="p-3 text-white" type="submit">
                  <FaSearch />
               </button>
            </form>
         </div>
      </div>
   );
};

export default Search;
