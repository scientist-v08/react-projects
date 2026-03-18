import { pokemons, Pokemon } from './constants/pokemon';

export function App() {
  const allPokemons = pokemons.map((item: Pokemon) => {
    return (
      <div key={item.id} className="border p-4 rounded shadow bg-slate-300">
        <h2 className="text-lg font-semibold mb-2 flex items-center justify-center">
          {item.name}
        </h2>
        <img
          src={item.imgSource}
          alt={item.name}
          className="w-full h-32 object-contain mb-2"
        />
        <p className="flex items-center justify-center">Type: {item.type}</p>
        <p className="flex items-center justify-center">
          Experience: {item.base_experience}
        </p>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-3xl text-slate-500 font-bold mt-2 flex items-center justify-center">
        Pokedex
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-12">
        {allPokemons}
      </div>
    </>
  );
}

export default App;
