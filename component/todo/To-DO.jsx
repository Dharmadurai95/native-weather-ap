import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { todoStyle } from './to-do.style'
import Header from './Header'
import Card from './Card'
import TabBottom from './footer'
import AddToDo from './AddToDo';
import Dialog from "react-native-dialog";
import AsyncStorage from '@react-native-async-storage/async-storage';



let isFirstRender = true;
let initialSave = true;
const ToDo = () => {
    const [todoList, setTodoList] = useState([
        {
            "id": 1,
            "title": "Complete project documentation",
            "isComplete": false
        },
        {
            "id": 2,
            "title": "Review code for optimization",
            "isComplete": true
        },
        {
            "id": 3,
            "title": "Set up database backups",
            "isComplete": false
        },
        {
            "id": 4,
            "title": "Test API integrations",
            "isComplete": true
        },
        {
            "id": 5,
            "title": "Prepare presentation slides",
            "isComplete": false
        }
    ]);
    const [selectedTab, setSelectedTab] = useState('all');
    const [showAddTodo, setshowAddTodo] = useState(false);
    const [newNote, setNewNote] = useState('')
    function updateToDo(id) {
        const update = todoList.map((v) => {
            if (v.id == id) {
                return { ...v, isComplete: !v.isComplete }
            }
            return v;
        })
        setTodoList(update)
    }

    async function _getTodo() {
        try {

            const existingOp = await AsyncStorage.getItem('@todo');
            setTodoList(JSON.parse(existingOp) || todoList)
        } catch (e) {
            setTodoList(todoList)
        }
    }
    async function _saveTodo() {
        try {
            await AsyncStorage.setItem('@todo', JSON.stringify(todoList));
            initialSave = true
        } catch (e) {
            console.log('unable to save data', e)
        }
    }
    useEffect(() => {
        _getTodo()

    }, [])
    useEffect(() => {
        if (!initialSave) {

            if (!isFirstRender) {
                _saveTodo()
            } else {
                isFirstRender = false

            }
        } else {
            initialSave = false
        }
    }, [todoList])
    function todoItem() {
        switch (selectedTab) {
            case 'all':
                return todoList
            case 'in-progress':
                return todoList.filter(v => !v.isComplete)
            case 'done':
                return todoList.filter(v => v.isComplete)
            default:
                return todoList
        }
    }
    function removeToDo(id) {
        Alert.alert('Delete To-Do', "Are you sure you want to delete this ?", [

            {
                text: "Delete",
                onPress: () => {
                    setTodoList(todoList.filter(v => v.id !== id))
                },
                style: "destructive"
            },
            {
                text: "Cancel",

                style: "cancel"
            }



        ])
    }
    function saveNewTodo() {

        const newTodo = {
            id: todoList.length + 1,
            title: newNote,
            isComplete: false
        }
        setTodoList([...todoList, newTodo]);
        setshowAddTodo(false);
        setNewNote('')
    }
    return (<>
        <SafeAreaProvider>
            <SafeAreaView style={todoStyle.container}>
                <View style={todoStyle.head}>
                    <Header />
                </View>
                <View style={todoStyle.body}>

                    <ScrollView>
                        {

                            todoItem().map(v => <View key={v.id} style={todoStyle.card}>
                                <Card {...v} removeToDo={removeToDo} onPress={updateToDo} />
                            </View>)
                        }
                    </ScrollView>
                </View>

                <AddToDo addTodo={setshowAddTodo} />
            </SafeAreaView>
        </SafeAreaProvider>
        <View style={todoStyle.footer}>
            <TabBottom selectTabHandler={setSelectedTab} selected={selectedTab} toToList={todoList} />
        </View>
        <Dialog.Container visible={showAddTodo} onBackdropPress={() => setshowAddTodo(false)}>
            <Dialog.Title>Add New To Do</Dialog.Title>
            <Dialog.Description>
                Choose a name for your to do
            </Dialog.Description>
            <Dialog.Input onChangeText={setNewNote} placeholder='ex:visit a laptop a showroom'></Dialog.Input>
            <Dialog.Button label="Cancel" onPress={() => setshowAddTodo(false)} />
            <Dialog.Button disabled={!newNote} label="Save" onPress={saveNewTodo} />
        </Dialog.Container>
    </>
    )
}

export default ToDo