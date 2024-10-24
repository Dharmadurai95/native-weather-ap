import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const AddToDo = ({addTodo}) => {
  return (
    <TouchableOpacity onPress={()=>addTodo(true)} style={style.button}>
        <Text>+ Add To Do</Text>
    </TouchableOpacity>
  )
}

export default AddToDo

const style = StyleSheet.create({
    button:{
        position:'absolute',
        width:100,
        height:40,
        backgroundColor:"#6bbaff",
        padding:10,
        bottom:60,
        right:30,
        alignItems:'center',borderRadius:16
    }
})