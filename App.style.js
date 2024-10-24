import { StyleSheet } from "react-native";


export const appStyle = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: "center",
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    navigation: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#1da1f2",
        flex: 1,
        flexDirection: 'row',
        height:40,
        width:"100%",
        justifyContent:"space-around",
        alignContent:"center"
    },
    naveItem:{
        fontSize:30,
        fontWeight:700,
        height:100,
        padding:10,
        borderRadius:5
        
    },
    naveText:{
        color:"#fff",
        fontWeight:'bold',
        fontSize:15,
    },
    selectedNaveItem:{
        fontSize:30,
        fontWeight:700,
        height:100,
        padding:10,
        borderRadius:5,
        backgroundColor:'#6bbaec'

    },
    imgBg:{
        height:"100%",
        width:'100%'
    }
})
