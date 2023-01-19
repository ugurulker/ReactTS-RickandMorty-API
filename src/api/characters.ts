import instance from "./axios";
import { CharacterType } from "../types/characterTypes";

export const getCharacters = async () => {
  try {
    const { data } = await instance.get("/character");
    return data;
  } catch (error) {
    console.log(error);
  }
};
