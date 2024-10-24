import { StyleSheet } from "react-native";

export const todoStyle = StyleSheet.create({
    container:{
        padding:10,
        flex:1,
        backgroundColor:"#f9f9f9"
    },
    head:{
        flex:1,
    },
    body:{
        flex:5,
        justifyContent:'space-evenly'
    },
    footer:{
        height:100,
        backgroundColor:'#fff',
        // marginBottom:20
    },
    card:{marginBottom:15}

})