import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/Auth/LoginForm';
import PanelUser from '../components/Auth/PanelUser';
import useAuth from '../hooks/useAuth';

export default function Account(){
 const {auth} = useAuth();

    return (
      <View style={styles.bg}>
        {
          auth ? <PanelUser/> :  <LoginForm/>
        }       
      </View>
    )
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor: '#F82611',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
})
