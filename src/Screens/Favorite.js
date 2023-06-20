import React, {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonFavoriteApp} from '../api/favorite';
import { getPokemonById } from '../api/pokemon'; 
import useAuth from '../hooks/useAuth';
import PokemonList from '../components/PokemonList';

export default function Favorite(){
  const {auth} = useAuth();
  const [Pokemons, setPokemons] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useFocusEffect(
    useCallback(()=>{
      (async ()=>{
        try {
          const data = await getPokemonFavoriteApp();
       
          const pokemonArray = [];
  
          for await (const pokemon of data){
            const pokemonDetails = await getPokemonById(pokemon)
            
            pokemonArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other['official-artwork'].front_default,
            });
          }
  
          setPokemons([...Pokemons, ...pokemonArray]);

          setSpinner(false);
          
        } catch (error) {
          console.log(error);
        }
      })()
    },[auth])
  )


  return (
    <SafeAreaView >
      <Spinner isVisible={spinner}/>
      <PokemonList pokemons={Pokemons}/>
    </SafeAreaView>
  )
}


function Spinner(props) {
  
  const {isVisible} = props;

  if (isVisible) {
    return (
      <>
       <ActivityIndicator
                size='large'
                style={styles.spinner}
                color='#AEAEAE'
               />
      </>
    )
  }

 
}

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 75 : 60
  }
})