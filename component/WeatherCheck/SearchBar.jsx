import React from 'react'
import { TextInput } from 'react-native'

const SearchBar = ({ callBack }) => {
    return (
        <TextInput
            style={
                {
                    backgroundColor: "#fff",
                    fontSize: 20,
                    padding: 10,
                    borderRadius: 8,
                    color: "black",
                    width:'80%'
                }

            }
            placeholder='Enter City Name'
            onSubmitEditing={(e) => callBack(e.nativeEvent.text)}

        ></TextInput>
    )
}

export default SearchBar

