import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet,Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonCard from './PokemonCard';

export default function PokemonList(props){
    const {pokemons, loadPokemon, isnext} = props;

    const loadMore = ()=>{
      loadPokemon();
    }

    return (
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({item})=> <PokemonCard pokemon={item}/>}
        contentContainerStyle={styles.FlatListContentContainer}
        onEndReached={isnext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent ={
          isnext && (
            <ActivityIndicator
              size='large'
              style={styles.spinner}
              color='#AEAEAE'
             />
          )          
        }
      />
    )
}

const styles = StyleSheet.create({
    FlatListContentContainer: {
        paddingHorizontal: 5
    },
    spinner: {
      marginTop: 20,
      marginBottom: Platform.OS === 'android' ? 75 : 60
    }
})