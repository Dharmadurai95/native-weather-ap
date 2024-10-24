import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../../assets/logo (1).png'

const Header = () => {
    return (
        <View>
            <Image style={headerStyle.image} source={logo} resizeMode='contain'></Image>
            <Text style={headerStyle.text}>You probably have something to do</Text>
        </View>
    )
}

export default Header

const headerStyle = StyleSheet.create({
    image: {
        width: 170
    },
    text: {
        color:"#ABABAB",
        fontSize:20,
        marginTop:-20
    }
})