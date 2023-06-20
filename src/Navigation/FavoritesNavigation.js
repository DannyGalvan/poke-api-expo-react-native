import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favorite from '../Screens/Favorite';
import Pokemon from '../Screens/Pokemon';

const Stack = createStackNavigator();

export default function FavoriteNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name='Favoritos' component={Favorite} options={{
            title: "Favoritos",
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