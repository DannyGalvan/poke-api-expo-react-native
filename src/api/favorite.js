import AsyncStorage from "@react-native-async-storage/async-storage";
import {includes, pull} from "lodash"
import { FAVORITE_STORAGE } from "../utils/constantes";


export async function getPokemonFavoriteApp() {
    try {
        const data = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return data  ? JSON.parse(data) : [];
    } catch (error) {
        throw error;
    }
}

export async function addPokemonFavorite(idPokemon) {
    try {
        const favorites = await getPokemonFavoriteApp();
        favorites.push(idPokemon);

        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
}

export async function isPokemonFavorite(idPokemon) {
    try {
        const favorites = await getPokemonFavoriteApp();
        return includes(favorites, idPokemon)
    } catch (error) {
        throw error;
    }
}

export async function removePokemonFavorite(idPokemon) {
    try {
        const favorite = await getPokemonFavoriteApp();
        const newFavorite = [...favorite];

        const actualizado = pull(newFavorite, idPokemon);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(actualizado));
    } catch (error) {
        throw error;
    }
}


