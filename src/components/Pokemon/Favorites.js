import React, {useState, useEffect} from 'react';
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome';
import { addPokemonFavorite, isPokemonFavorite, removePokemonFavorite } from '../../api/favorite';

export default function Favorites(props){
    const {id} = props;

    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadCheck, setReloadCheck] = useState(false);

    const Icono = isFavorite ? Icon : Icon5;

    useEffect(()=>{
      (async()=>{
        try {
            const response = await isPokemonFavorite(id);
            setIsFavorite(response);
        } catch (error) {
            setIsFavorite(false);
        }
      })()
    },[id, reloadCheck])

    const onReloadHeart = ()=>{
        setReloadCheck((previo) => !previo);
    }

    const addFavorite = async ()=>{
       try {
            await addPokemonFavorite(id);
            onReloadHeart();
       } catch (error) {
            console.log(error);
       }
    }

    const removeFavorite = async()=>{
        try {
            await removePokemonFavorite(id)
            onReloadHeart();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Icono 
        name='heart' 
        color="#fff" 
        size={20} 
        onPress={isFavorite ? removeFavorite :  addFavorite}
        style={{marginRight: 20}}></Icono>
    )
}