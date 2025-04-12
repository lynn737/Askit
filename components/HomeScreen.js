import {useState,useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import supabase from '../SupabaseClient';

export default function HomeScreen({route}) {
    const {username} = route.params;
    const navigation = useNavigation()
    const [folders, setFolders] = useState([])

    const getFolders = async () => {
        const {data, error} = await supabase
            .from('Folders')
            .select()
            .eq('username',username);
        if (data) {
            let tempFolders = []
            for (let folder of data) {
                tempFolders.push(folder.name)
            }
            setFolders(tempFolders)

        }
        if (error) {
            console.log(error)
        }
        
       
    }
    getFolders()
    


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Folders: </Text>
            {folders.map((folder)=>
                <View styles={styles.folderButton}>
                    <Button mode='contained' onPress={()=>{navigation.navigate('Folder',{name:folder})}}>{folder}</Button>
                </View>
                
            )}
            
        <Button mode='outlined' onPress={()=>{navigation.navigate('AddTextQuestion',{username:username})}}>Add text question</Button>
        <Button mode='outlined' onPress={()=>{navigation.navigate('AddFolder',{username:username})}}>Add folder</Button>
        <Button mode='outlined' onPress={()=>{navigation.navigate('Search',{username:username})}}>Search</Button>
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
    buttonRow: {
        flexDirection: "row",
        gap: 10, 
        marginTop: 20
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    }
})
