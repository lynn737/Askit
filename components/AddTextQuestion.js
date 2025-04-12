import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useState} from 'react'
import { useNavigation} from '@react-navigation/native';
import {TextInput, Button} from 'react-native-paper';
import supabase from '../SupabaseClient';

export default function AddTextQuestion({route}) {
    const {username} = route.params;
    const navigation = useNavigation()
    const [text, setText] = useState("")
    const [folder, setFolder] = useState("")
    const [answer, setAnswer] = useState("")

    const handleSaveQuestion = async () => {
        const {data, error} = await supabase
            .from('Questions')
            .insert([{text,answer,folder,username}])
        if (data) {
            console.log('saved')
        }
        if (error) {
            console.log(error)
        }

       
        navigation.navigate('HomeScreen',{username:username})
    }

    return (
        <View style={styles.container}>
            <Text>Add Text Question</Text>
            <View style={styles.textInputContainer}>
                <TextInput label='Question' value={text} onChangeText={text => setText(text)}/>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput label='Folder' value={folder} onChangeText={folder => setFolder(folder)}/>
            </View>
            <Text>{text}</Text>
            <Text>{folder}</Text>
            <Button mode='outlined' onPress={() => {handleSaveQuestion()}}>Save Question</Button>
            <Button mode='outlined' onPress={()=>{navigation.navigate('HomeScreen')}}>Back To Home</Button>
            
        
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#e3d9a8",
        justifyContent: "column",
        alignItems: "center",
        flex: 1
    },
    textInputContainer: {
        height: 100,
        width: 200
    }
    
})
