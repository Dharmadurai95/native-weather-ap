import { StyleSheet } from "react-native";

export const wetherStyle = StyleSheet.create({
    container:{
        height:450,
        alignItems:"center",
        justifyContent:'space-between',
    },
    displayTemp:{
        fontSize:30,
        fontWeight:'800'
    },
    convert:{
        padding:20,
        backgroundColor:"black",
        fontSize:20,
        alignContent:'space-between',
        borderRadius:40,
        width:250,
        
    },
    text:{
        alignSelf:'center',
        fontSize:20,
        color:"#fff",
    }
})