interface TypesPokemonProps {
  name:string,
  url?:string
}

const TypesPokemon = ({name}:TypesPokemonProps) => {
  
  return (
   <>
   <ul className="flex flex-wrap items-center justify-center text-gray-900">
    <li>
        <a href="#" className="me-4 hover:underline md:me-6 ">{name}</a>
    </li>
    
</ul>
   </>
  )
}

export default TypesPokemon