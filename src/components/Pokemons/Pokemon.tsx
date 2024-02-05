import { Pokemons } from "../../models/Pokemons"

const Pokemon = ({name,img,height,weight,experience}:Pokemons) => {
 
  return (
    <div className="py-3 mt-2">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
        <img className="rounded-t-lg" src={img} alt="pokemons" width={"160"} />
        </div>
    <div className="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name.toLocaleUpperCase()}</h5>
            <p className="font-semibold text-white">Height : {height}</p>
            <p className="font-semibold text-white">Weight : {weight}</p>
            <p className="font-semibold text-white">Experience : {experience}</p>
        <button className=" mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </button>
       
    </div>
</div>
    </div>
  )
}

export default Pokemon