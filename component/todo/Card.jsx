import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import check from '../../assets/check.png'

const Card = ({ title, isComplete, id, onPress,removeToDo }) => {
    return (
        <TouchableOpacity onLongPress={()=>removeToDo(id)} style={styles.root} onPress={() => onPress(id)}>
            <Text style={[styles.title, isComplete ? { textDecorationLine: 'line-through' } : {}]}>{title}</Text>
            {isComplete && <Image style={styles.image} source={check} resizeMode='contain' />}
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        height: 115,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        borderRadius: 16,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 15
    },
    title: {
        fontSize: 25
    },
    image: {
        height: 25,
        width: 25
    }
})