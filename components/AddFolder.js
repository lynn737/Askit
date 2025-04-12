import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useState} from 'react'
import { useNavigation} from '@react-navigation/native';
import {TextInput, Button} from 'react-native-paper';
import supabase from '../SupabaseClient';

export default function AddTextQuestion({route}) {
    const {username} = route.params;
    const navigation = useNavigation()
    const [name, setName] = useState("")

    const handleSaveFolder = async () => {
        const {data, error} = await supabase
            .from('Folders')
            .insert([{name,username}])
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
            <Text>Add Folder</Text>
            <View style={styles.textInputContainer}>
                <TextInput label='Folder Name' value={name} onChangeText={name => setName(name)}/>
            </View>
            
            <Text>{name}</Text>
            <Button mode='outlined' onPress={() => {handleSaveFolder()}}>Save Folder</Button>
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
