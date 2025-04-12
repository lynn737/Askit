import {useState,useEffect} from 'react'
import { View, Text, StyleSheet,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddTextQuestion from './AddTextQuestion';
import supabase from '../SupabaseClient';

export default function HomeScreen() {
    const navigation = useNavigation()
    const [folders, setFolders] = useState([])

    const getFolders = async () => {
        const {data, error} = await supabase
            .from('Folders')
            .select()
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
        
       
        //navigation.navigate('HomeScreen')
    }
    getFolders()
    
    // useEffect(() => {
    //     const getFolders = async () => {
    //         const {data, error} = await supabase
    //             .from('Folders')
    //             .select(`*`)
    //         if (data) {
    //             let tempFolders = []
    //             for (let folder of data) {
    //                 tempFolders.push(folder.name)
    //             }
    //             setFolders(tempFolders)
    //             console.log(folders)
    
    //         }
    //         if (error) {
    //             console.log(error)
    //         }
            
           
    //         navigation.navigate('HomeScreen')
    //     }
    //     getFolders()
    // })

    return (
        <View style={styles.container}>
            <Text>Folders: </Text>
            {folders.map((folder)=>
                <Text>{folder}</Text>
            )}
            <Button title='Add text question' onPress={()=>{navigation.navigate('AddTextQuestion')}}></Button>
            <Button title='Add folder' onPress={()=>{navigation.navigate('AddFolder')}}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#e3d9a8",
        justifyContent: "column",
        alignItems: "center",
        flex: 1
    }
})
