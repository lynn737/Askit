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
        marginBottom: 20,}}>Add Folder</Text>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.input} label='Folder Name' value={name} onChangeText={name => setName(name)}/>
            </View>
            
            <View style={{margin:10}}>
                <Button mode='outlined' textColor="#000" onPress={() => {handleSaveFolder()}}>Save Folder</Button>
            </View>
            <View style={{margin:10}}>
                <Button mode='outlined'textColor="#000" onPress={()=>{navigation.navigate('HomeScreen')}}>Back To Home</Button>
            </View>
            
            
            
        
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ffe0b2',
    },
    textInputContainer: {
        height: 100,
        width: 200,
        marginBottom: 15,
        justifyContent: 'center',
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
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    folderName: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
    },
})
