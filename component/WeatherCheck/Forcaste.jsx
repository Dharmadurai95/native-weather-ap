import React from 'react'
import Txt from '../UI/Text'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ForecastListItem from './ForecaseListItem'
import { DAY_OF_WEEK, getWeatherInterpretation } from '../Units/units'

const Forcaste = (props) => {
    const nav = useNavigation()
    const forCasteItems = () => {
        return <View style={{ marginTop: 50 }}>
            {props.daily.time.map((v, index) => {
                const code = props.daily.weathercode[index];
                const temp = props.daily.temperature_2m_max[index];
                const img = getWeatherInterpretation(code);
                const date = new Date(v);
                const day = DAY_OF_WEEK[date.getDay()]
                const dateFrm = date.toLocaleDateString('default', {
                    day: 'numeric',
                    month: 'numeric'
                })

                return <ForecastListItem
                    key={v}
                    img={img}
                    temp={temp}
                    day={day}
                    data={dateFrm}
                />
            })}
        </View>
    }
    return (
        <View style={s.root}>
            <TouchableOpacity onPress={nav.goBack}>
                <Txt>⇚</Txt>
            </TouchableOpacity>
            <View style={s.headerTxt}>
                <Txt>{props?.city?.toUpperCase()}</Txt>
                <Txt style={s.subTitle}>7 Days Forecast</Txt>
                {forCasteItems()}
            </View>

        </View>
    )
}

export default Forcaste;

const width = 30
const s = StyleSheet.create({
    root: { flexDirection: 'row' },
    backbtn: {
        width: width
    },
    headerTxt: {
        flex: 1,
        alignItems: "center",
        marginRight: width
    },
    subTitle: { fontSize: 22 }
})