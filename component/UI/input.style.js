import { StyleSheet } from "react-native";


export const inputStyle = StyleSheet.create({
    root: {
        alignSelf: "stretch",

        justifyContent: "center"
    },
    input: {
        backgroundColor: "#fff",
        fontSize: 20,
        padding: 20,
        borderRadius: 8,
        color:"black"

    },
    degree: {
        position: "absolute",
        alignSelf: 'flex-end',
        paddingRight: 30,
        fontSize: 30
    }
})