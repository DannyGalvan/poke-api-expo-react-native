import React from 'react';
import { ScrollView } from 'react-native';
import { getPokemonById } from '../api/pokemon';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats'
import Favorites from '../components/Pokemon/Favorites';
import useAuth from '../hooks/useAuth';

export default function Pokemon(props){
  const {navigation, route} = props;
  const [pokemon, setPokemon] = useState(null);
  const {auth} = useAuth();

  useEffect(()=>{
    navigation.setOptions({
      headerRight: ()=> auth && <Favorites id={pokemon?.id}/>,
      headerLeft: ()=> <Icon 
                        name='arrow-left' 
                        color="#fff" 
                        size={20} 
                        style={{ marginLeft: 20 }}
                        onPress={navigation.goBack}/> 
    })
  },[navigation, route.params, pokemon])

  useEffect(()=>{
    (async ()=>{
      loadDetails()
    })()
  }, [route.params]);

  const loadDetails = async ()=>{
    try {
      const details =await getPokemonById(route.params.id);
      setPokemon(details);
    } catch (error) {
      navigation.goBack()
    }
  }

  if (!pokemon) {
    return null;
  }
  
    return (
      <ScrollView>
        <Header 
        name={pokemon.name} 
        order={pokemon.order} 
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
        />
        <Type  type={pokemon.types}/>
        <Stats stats={pokemon.stats}/>
      </ScrollView>
    )
}