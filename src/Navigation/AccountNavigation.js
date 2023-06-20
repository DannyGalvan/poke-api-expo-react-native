import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../Screens/Account';

const Stack = createStackNavigator();

export default function AccountNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name='Account' component={Account} options={{
            title: "Mi Cuenta",
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