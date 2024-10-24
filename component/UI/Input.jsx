import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { inputStyle } from './input.style'


const Input = ({defaultValue=2,unit,onChange}) => {
    return (
        <View style={inputStyle.root}>
            <TextInput placeholder='Type your temperature'
                maxLength={3}
                defaultValue={defaultValue}
                style={inputStyle.input}
                onChangeText={(text)=>{
                    onChange(text)
                }}
            ></TextInput>
            <Text style={inputStyle.degree}>{unit}</Text>
        </View>
    )
}

export default Input

