import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput,Button } from 'react-native-paper';
import supabase from '../SupabaseClient';

export default function Folder({route}) {
    const navigation = useNavigation();
    const {question} = route.params;
    const [text,setText] = useState(question.text)
    const [answer,setAnswer] = useState(question.answer)

    const handleSaveQuestion = async () => {
        const {error} = await supabase
            .from('Questions')
            .update({text: text, answer: answer})
            .eq('id',question.id)
        if (data) {
            console.log('saved')
        }
        if (error) {
            console.log(error)
        }
        
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>{'Q: ' + question.text}</Text> */}
            <Text>Q: </Text>
            <TextInput value={text} onChangeText={text => setText(text)}/>
            <Text>A: </Text>
            <TextInput value={answer} onChangeText={answer => setAnswer(answer)}/>
            <Button mode='outlined' onPress={() => {handleSaveQuestion()}}>Save Question</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4e2',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    searchBar: {
        marginBottom: 12,
    },
    questionItem: {
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
    },
    questionText: {
        fontSize: 16,
    },
});