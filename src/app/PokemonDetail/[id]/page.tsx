import Image from "next/image";
import { Pokemon } from "@/types/PokemonType";
import React from "react";
import Link from "next/link";

export default async function PokemonDetail({
  params,
}: {
  params: { id: string };
}) {
  const getPokemonDetail = async () => {
    const res = await fetch(`http://localhost:3000/api/pokemons/${params.id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };
  const pokemoninfo = await getPokemonDetail();

  return (
    <div className="flex justify-center item-center bg-red-400">
      <div className="flex flex-col justify-center item-center p-60 m-10 border-solid border-4 bg-white">
        <div>
          <Image
            src={pokemoninfo.sprites.front_default}
            width={200}
            height={200}
            alt="unsplash image"
          />
          <p>이름: {pokemoninfo.korean_name}</p>
          <p>키: {pokemoninfo.height / 10}m</p>
          <p>무게: {pokemoninfo.weight / 10}kg</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            기술:
            {pokemoninfo.moves.map((move) => (
              <div key={move.move.name}>{move.move.korean_name}</div>
            ))}
          </div>
          <Link className="bg-amber-400 border-solid border-4" href="/">
            뒤로가기
          </Link>
        </div>
      </div>
    </div>
  );
}
