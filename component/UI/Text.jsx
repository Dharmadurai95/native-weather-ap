import React, { Children } from 'react'
import { StyleSheet, Text } from 'react-native'

const Txt = ({ children, style }) => {
    // const {height,fontScale} = useWindowDimensions();
    // const fontSz = style?.fontSize || textStyle.style.fontSize

    // {fontSize:Math.round(fontSz *0.86* height)}
    return (
        <Text style={[textStyle.style, style]}>{children}</Text>
    )
}

export default Txt;

const textStyle = StyleSheet.create({
    style: {
        fontSize: 30,
        color: '#FFF',
        fontFamily: 'adaptive'

    }
})