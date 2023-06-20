import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {map, capitalize} from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type(props){
    const {type} = props;

    return (
     <SafeAreaView style={style.content}>
         {map(type, (item, index)=> (
            <View style={{...style.pill, backgroundColor: getColorByPokemonType(item.type.name)}} key={index}>
                <Text> {capitalize(item.type.name)}</Text>
            </View>
         ))}
     </SafeAreaView>
    )
}

const style = StyleSheet.create({
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 40
    },
    pill:{
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 60,
        marginHorizontal: 10
    }
})