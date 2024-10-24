import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TabBottom = ({ selectTabHandler, selected, toToList=[] }) => {
    const selectedTab = function (tab) {
        return { fontWeight: 'bold', color: selected == tab ? '#2f76E5' : 'black' }
    }
    const count = toToList.reduce((acc, curr) => {
        curr.isComplete ? acc.done++ : acc.inProgress++;
        return acc;
    }, {
        all: toToList.length,
        inProgress: 0,
        done: 0
    })
    return (
        <View style={tab.root}>

            <TouchableOpacity onPress={() => selectTabHandler('all')}>
                <Text style={selectedTab('all')}>All ({count.all})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectTabHandler('in-progress')}>
                <Text style={selectedTab('in-progress')}>In-Progress ({count.inProgress})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectTabHandler('done')}>
                <Text style={selectedTab('done')}>Done ({count.done})</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TabBottom

const tab = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        alignItems: 'center',
        paddingBottom: 30
    }
})