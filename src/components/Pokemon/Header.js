import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {capitalize} from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header(props){
    const {name, order, image, type} = props;
    const color = getColorByPokemonType(type);
    const bgStyles = {backgroundColor: color,...style.bgStyles}

    return (
     <>
        <View style={bgStyles}/>
        <SafeAreaView style={style.content}>   
            <View style={style.header}>
                <Text style={style.text}>{capitalize(name)}</Text>
                <Text style={style.text}>#{`${order}`.padStart(3,0)}</Text>              
            </View>    
            <View style={style.contentImg}>
                <Image source={{uri: image}} style={style.image}/>
            </View>
        </SafeAreaView>        
     </>
    )
}

const style = StyleSheet.create({
    bgStyles:{
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}]
    },
    content:{
        marginHorizontal: 20,
        marginTop: 30
    },
    contentImg:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10
    },
    image: {
        bottom: 2,
        right: 2,
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 30
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 27
    }       
})