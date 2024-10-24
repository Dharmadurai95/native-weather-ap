import { StyleSheet } from "react-native";

export const profileStyle = StyleSheet.create({
    container: {
        padding:20,
        marginBottom:5,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },
    header:{
        flexDirection:"row",
    },
    image:{
        height:70,
        width:70,
        borderRadius:50,
        border:1,
    },
    text:{
        flex:1,
        paddingLeft:15
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
    },
    content:{
        flex:1
    },
    social:{
        padding:10,
        flexDirection:"row",
        justifyContent:'space-evenly'
    },
    icon:{
        backgroundColor:'#eee',
        padding:10,
        borderRadius:50
    }
})