import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Txt from '../UI/Text'
import { getWeatherInterpretation } from '../Units/units'
import Clock from './Clock'
import { useNavigation } from '@react-navigation/native'

const MertroBasic = (props) => {
    const { temperature = '0', weathercode = '1' } = props?.current_weather;
    const interpretationInfo = getWeatherInterpretation(weathercode);
    const nav = useNavigation()
    return (
        <>
            <View style={s.clock}>
                <Clock />
            </View>
            <View>
                <Txt>{props.city}</Txt>
            </View>
            <View style={s.interpretation}>
                <Txt style={s.interpretation_text}>{interpretationInfo?.label}</Txt>
            </View>
            <View style={s.tem_box}>
                <TouchableOpacity onPress={()=> nav.navigate('forecast')}>

                    <Txt style={s.temp_text} st>{Math.round(temperature)}°</Txt>
                </TouchableOpacity>
                <Image style={s.image} source={interpretationInfo?.image} />
            </View>

        </>
    )
}

export default MertroBasic;

const s = StyleSheet.create({
    clock: {
        alignItems: "flex-end"
    },
    interpretation: {
        alignSelf: "flex-end",
        transform: [{ rotate: '-90deg' }]
    },
    interpretation_text: { fontSize: 20 },
    image: {
        height: 50,
        width: 50,
    },
    tem_box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'baseline'
    },
    temp_text: {
        fontSize: 150
    }
})