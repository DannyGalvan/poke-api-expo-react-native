import {API_HOST} from '../utils/constantes.js';

export async function getPokemons(urlEndPoint){
    try {
        
        const url = `${API_HOST}/pokemon?limint=20&offset=0`;
        const response =  await fetch(urlEndPoint || url);
        const data = await response.json();

        return data;
    } catch (e) {
        throw e;
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error
    }
}

export async function getPokemonById(id){
    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error
    }
}