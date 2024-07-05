"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pokemon } from "../types/PokemonType";
import Link from "next/link";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch("/api/pokemons");
        const data = await res.json();
        setPokemons(data);
        console.log("data", data);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemons();
  }, []);
  console.log(pokemons);

  return (
    <div className="grid grid-cols-6 gap-3 bg-red-400">
      {pokemons.map((pokemon) => (
        <Link
          href={`PokemonDetail/${pokemon.id}`}
          key={pokemon.id}
          className="flex items-center text-center mt-2 flex-col hover:border-sky-700 p-5 m-4 border-solid border-2 border-black-800 rounded-md justify-center bg-white"
        >
          <Image
            src={pokemon.sprites.front_default}
            width={100}
            height={100}
            alt="unsplash image"
          />
          <p>{pokemon.korean_name}</p>
          <p>도감번호:{pokemon.order}</p>
        </Link>
      ))}
    </div>
  );
}
