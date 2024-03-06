import ModalPokemon from "../ModalPokemon/ModalPokemon";
import { PokemonProps } from "./Pokemon.interface";
import { useToggle } from "usehooks-ts";

const Pokemon = ({
  name,
  img,
  height,
  weight,
  experience,
  abilities,
}: PokemonProps) => {
  const [value, toggle] = useToggle();

  return (
    <>
      <div
        onClick={toggle}
        className="hover:scale-110 transition inline-block cursor-pointer max-w-md mx-auto p-3 bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5 w-96"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0 h-40">
            <img className="h-30 w-40 object-cover" src={img} alt="Pokemon" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide  text-indigo-500 font-semibold">
              {name}
            </div>
            <p className="mt-2 text-gray-500">experience: {experience}</p>
            <p className="mt-2 text-gray-500"> weight: {weight}</p>
            <p className="mt-2 text-gray-500"> height: {height}</p>
          </div>
        </div>
        <ModalPokemon
          value={value}
          name={name}
          img={img}
          toggle={toggle}
          abilities={abilities}
        />
      </div>
    </>
  );
};

export default Pokemon;
