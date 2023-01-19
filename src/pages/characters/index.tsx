import * as React from "react";
import { useQuery } from "react-query";
import { getCharacters } from "../../api/characters";
import { CharacterCard } from "../../components/CharacterCard";
import Loading from "../../components/Loading/Loading";
import { CharacterType } from "../../types/characterTypes";

export interface ICharactersProps {}

export function Characters(props: ICharactersProps) {
  const {
    isLoading,
    isError,
    error,
    data: characters,
  } = useQuery("allCharacters", getCharacters);

  const data: CharacterType = characters ?? [];

  if (error) {
    return (
      <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center text-center">
        <h2 className="text-3xl text-white font-semibold">
          Something went wrong!
        </h2>
      </div>
    );
  }

  return !isLoading ? (
    <div>
      {data?.results?.map((item, index) => (
        <div key={index}>
          <CharacterCard data={item} />
        </div>
      ))}
    </div>
  ) : (
    <div className="min-h-[calc(100vh-80px)] w-full flex justify-center items-center text-center">
      <Loading gif="/src/assets/gifs/portal-loading.gif" />
    </div>
  );
}
