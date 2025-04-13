import {useState,useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import supabase from '../SupabaseClient';

export default function HomeScreen({route}) {
    const {username} = route.params;
    const navigation = useNavigation()
    const [folders, setFolders] = useState([])

    //console.log(user)

    const getFolders = async () => {
        const {data, error} = await supabase
            .from('Folders')
            .select(`*, Users(*)`)
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
                    <Button mode='contained' buttonColor="#ff914d" textColor="#000"onPress={()=>{navigation.navigate('Folder',{name:folder})}}>{folder}</Button>
                </View>
                
            )}
        
        <View style={{flexDirection: 'row',marginTop:300}}>
            <View style={styles.buttonBox}>
                <Button mode='outlined' textColor="#000" onPress={()=>{navigation.navigate('AddTextQuestion',{username:username})}}>➕</Button>
            </View>

            <View style={styles.buttonBox}>
            <Button mode='outlined' textColor="#000" onPress={()=>{navigation.navigate('AddFolder',{username:username})}}>📁</Button>
            </View>

            <View style={styles.buttonBox}>
            <Button mode='outlined' textColor="#000" onPress={()=>{navigation.navigate('Search',{username:username})}}>🔎</Button>
            </View>
        </View>
        
    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#ffe0b2",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20
    },
    folderButton: {
        marginVertical: 8,
        width: '100%',
    },
    buttonRow: {
        marginTop: 30,
        width: '100%',
        gap: 10
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    buttonBox:{
        margin:10
    }
})
