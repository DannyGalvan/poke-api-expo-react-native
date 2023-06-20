import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../Screens/Pokedex';
import Pokemon from '../Screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation(){
    return (
      <Stack.Navigator>

        <Stack.Screen name='Pokedex' component={Pokedex} options={{
            title: "Pokedex",
            headerTransparent: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
        }}/>

        <Stack.Screen name='Pokemon' component={Pokemon} options={{
            title: "Pokemon",
            headerTransparent: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white',
        }}/>       
         
      </Stack.Navigator>
    )
}