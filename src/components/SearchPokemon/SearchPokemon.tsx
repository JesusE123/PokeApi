

import useSearchPokemon from "./useSearchPokemon";

const SearchPokemon = () => {
 const {handlechange,handleSubmit} = useSearchPokemon()
 
  return (

    <div className="flex justify-center mt-6">
      <form className="w-80" onSubmit={handleSubmit}>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <input 
        onChange={handlechange} 
        type="text" 
        name='namePokemon' 
        className="block w-full p-4 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-center" 
        placeholder="Search name of the pokemon" 
        required 
        />
       
    </div>
</form>
     
    </div>
  );
};

export default SearchPokemon;
