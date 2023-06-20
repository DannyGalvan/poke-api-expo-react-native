import React from 'react';
import {Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';
import FavoriteNavigation from './FavoritesNavigation';
import useAuth from '../hooks/useAuth';

const Tab = createBottomTabNavigator();


export default function Navigation(){
    const {auth} = useAuth();

    if (auth) {
               
        return (
            <Tab.Navigator initialRouteName='Pokedex' >
            
                <Tab.Screen name='Account' component={AccountNavigation} options={{
                    tabBarLabel: 'Mi Cuenta',
                    tabBarIcon: ({color, size})=>(
                        <Icon name='user' color={color} size={size}></Icon>
                    )
                }} />

                <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
                    tabBarLabel: '',
                    tabBarIcon: ()=>(
                        renderImage()
                    )          
                }} />

                <Tab.Screen name='Favorite' component={FavoriteNavigation} options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color,size,})=> (
                        <Icon name='heart' color={color} size={size}></Icon>
                    )
                }} />

            </Tab.Navigator>
        )
    }else{
        return (
            <Tab.Navigator>
            
                <Tab.Screen name='Account' component={AccountNavigation} options={{
                    tabBarLabel: 'Mi Cuenta',
                    tabBarIcon: ({color, size})=>(
                        <Icon name='user' color={color} size={size}></Icon>
                    )
                }} />

            </Tab.Navigator>
        )
    }

}

function renderImage() {
    return (
        <Image
            source={require('../assets/pokeball.png')}
            style={{
                width: 60,
                height: 60,
                top: -15,
            }}
        />
    )
}
