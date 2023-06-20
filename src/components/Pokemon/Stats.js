import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {map, capitalize} from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Stats(props){
    const {stats} = props;

    const statStyles = (number) =>{
        const color = number < 50 ? '#EC7063'  : '#5DADE2';
        return {
            backgroundColor: color,
            width: `${number}%`
        }
    }

    return (
     <View style={style.content}>
        <Text style={style.title}>Base Stats</Text>
        {map(stats, (item, index)=>(
            <View key={index} style={style.stats}>
                <View style={style.statsTitle}>
                    <Text style={style.name}>{capitalize(item.stat.name)}</Text>
                </View>
                <View style={style.statsInfo}>               
                    <Text style={style.number}>{item.base_stat}</Text>
                    <View style={style.bgBar}>
                       <View style={[style.bgStat, statStyles(item.base_stat)]}/>
                    </View>                  
                </View>
            </View>
        ))}
     </View>
    )
}

const style = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    stats:{
        flexDirection: 'row',
        paddingVertical: 5,
    },
    statsTitle:{
        width: '40%',

    },
    name:{
        fontSize: 12,
        color: 'gray'
    },
    statsInfo:{
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    number:{
        width: "12%",
        fontSize: 12
    },
    bgBar:{
        backgroundColor: '#EADFDE',
        width: '88%',
        height: 5,
        borderRadius: 20,
        overflow: 'hidden'
    },
    bgStat:{
        height: 5,
        borderRadius: 20,
    }
})