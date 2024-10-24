import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import Txt from '../UI/Text';

const ForecastListItem = ({ img, date, day, temp }) => {
    return (
        <View style={s.root}>
            <Image style={s.img} source={img.image} />
            <Txt style={s.day}>{day}</Txt>
            <Txt style={s.date}>{date}</Txt>
            <Txt style={s.temp}>{temp}°</Txt>
        </View>
    )
}

export default ForecastListItem;

const s = StyleSheet.create({
    root: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        // backgroundColor:"green"
        width:"100%"
    },
    img: { width: 50, height: 50 },
    day: { fontSize: 20 },
    date: { fontSize: 20 },
    temp: {
        minWidth: 40,
        textAlign: 'right'
    }
})