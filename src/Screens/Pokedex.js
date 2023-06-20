import { CurrentRenderContext } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemons } from '../api/pokemon';
import { getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex(){

   const [pokemons, setPokemons] = useState([]);
   const [nextUrl, setNextUrl] = useState(null)

    useEffect(()=>{
        (async ()=>{
          loadPokemon();
        })()
    }, []);

    const loadPokemon = async ()=>{
      try {

        const response = await getPokemons(nextUrl);
        setNextUrl(response.next);
        const pokemonArray = [];

        for await (const pokemon of response.results){
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
          
          pokemonArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other['official-artwork'].front_default,
          });
        }

        setPokemons([...pokemons, ...pokemonArray]);

      } catch (error) {
        console.error(error);
      }
    }

    return (
      <SafeAreaView >
         <PokemonList pokemons={pokemons} loadPokemon={loadPokemon} isnext={nextUrl}/>
      </SafeAreaView>
    )
}
