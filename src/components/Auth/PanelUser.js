import React, {useCallback, useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
import {size} from 'lodash'
import useAuth from '../../hooks/useAuth';
import { getPokemonFavoriteApp } from '../../api/favorite';

export default function PanelUser(){
    const {auth, logouth} = useAuth();
    const [total, setTotal] = useState(0);

    useFocusEffect(
      useCallback(()=>{
        (async()=>{
          try {
            const response = await getPokemonFavoriteApp();
            const count = response.length;
  
            setTotal(count);
          } catch (error) {
            setTotal(0);
          }
        })()
      },[])
    )
    
    return (
      <View style={styles.content}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Bienvenido!!!</Text>
          <Text style={styles.title}>
            {`${auth.firstName} ${auth.lastName}`}
          </Text>
        </View>
        <View style={styles.dataContent}>
          <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}`}/>
          <ItemMenu title="UserName" text={auth.username}/>
          <ItemMenu title="Correo Electronico" text={auth.email}/>
          <ItemMenu title="Favoritos" text={`${total} Pokemon`}/>
        </View>
        <View style={styles.btnLogouth}>
          <Button title='Cerrar Sesion' onPress={logouth} />
        </View>
      </View>
    )
}

function ItemMenu(props) {
  const {title,text} = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}: </Text>
      <Text style={styles.itemMenuContent}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock:{
    marginBottom: 30,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  dataContent:{
    marginBottom: 20,
  },
  itemMenu:{
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#cfcfcf"
  },
  itemMenuTitle:{
    fontWeight: 'bold',
    paddingRight: 10,
    width: 150,
    color: '#fff',
  },
  itemMenuContent:{
    color: '#fff',
  },
  btnLogouth:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})