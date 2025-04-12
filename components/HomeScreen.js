import * as React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddTextQuestion from './AddTextQuestion';



export default function HomeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title='Add text question' onPress={()=>{navigation.navigate('AddTextQuestion')}}></Button>
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
