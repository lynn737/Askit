import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useState} from 'react'
import { useNavigation} from '@react-navigation/native';
import {TextInput, Button} from 'react-native-paper';
import supabase from '../SupabaseClient';

export default function AddTextQuestion() {
    const navigation = useNavigation()
    const [text, setInput] = useState("")

    const handleSaveQuestion = async () => {
        const {data, error} = await supabase
            .from('Questions')
            .insert([{text}])

        
        navigation.navigate('HomeScreen')
        console.log('hello')
    }

    return (
        <View style={styles.container}>
            <Text>Add Text Question</Text>
            <View style={styles.textInputContainer}>
                <TextInput label='Type here' value={text} onChangeText={text => setInput(text)}/>
            </View>
            <Text>{text}</Text>
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
