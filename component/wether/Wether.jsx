import React, { useEffect, useState } from 'react'
import { wetherStyle } from './Wether.style'
import { Text, TouchableOpacity, View } from 'react-native'
import Input from '../UI/Input'
import { UNITS, invertSymbol, fehrenHeat, isIceTemp } from '../Units/units'
import coldImg from '../../assets/cold.png';
import hotImg from '../../assets/hot.png';



function Wether({ setBgImg }) {

    const [state, setState] = useState(0)
    const [unit, setUnit] = useState('°C');
    useEffect(() => {
        const isIce =  isIceTemp(state, unit);
        setBgImg(isIce ? coldImg:hotImg)
    }, [state,unit])
    const fehren = function () {
        if (isNaN(state)) return ''
        return fehrenHeat(state, invertSymbol(unit)).toFixed();
    }
    return (<View style={wetherStyle.container}>
        <Text style={wetherStyle.displayTemp}>
            {fehren()}

            {invertSymbol(unit)}
        </Text>
        <Input defaultValue={0}
            onChange={setState}
            unit={unit}
        />
        <TouchableOpacity style={wetherStyle.convert} onPress={() => {
            setUnit(invertSymbol(unit))
        }}>
            <Text style={wetherStyle.text}>Convert {invertSymbol(unit)}</Text>
        </TouchableOpacity>
    </View>)
}

export default Wether