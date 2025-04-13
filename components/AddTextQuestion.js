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
            console.log(username)
        }
        if (error) {
            console.log(error)
        }

       
        navigation.navigate('HomeScreen',{username:username})
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,}}>Add Text Question</Text>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.input} label='Question' value={text} onChangeText={text => setText(text)}/>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.input} label='Folder' value={folder} onChangeText={folder => setFolder(folder)}/>
            </View>
            <View style={styles.buttonBox}>
                <Button mode='outlined' textColor="#000" onPress={() => {handleSaveQuestion()}}>Save Question</Button>
            </View>
            
            
            <Button mode='outlined' textColor="#000" onPress={()=>{navigation.navigate('HomeScreen')}}>Back To Home</Button>
            
        
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffe0b2',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flex: 1
    },
    textInputContainer: {
        width: '80%', 
        marginBottom: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#000',
    },
    input: {
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    previewText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
        width: '80%', 
        padding: 10,
        borderRadius: 5,
    },
    buttonBox:{
        margin:10
    }
    
})
