import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Searchbar } from 'react-native-paper';
import supabase from '../SupabaseClient';

export default function Folder({route}) {
    const [unanswered, setUnanswered] = useState([]);
    const [resolved, setResolved] = useState([]);
    const [questions, setQuestions] = useState([]);
    const navigation = useNavigation();
    const {name} = route.params;

    useEffect(() => {
        const fetchQuestions = async () => {
            const { data, error } = await supabase
                .from('Questions')
                .select('*')
                .eq('folder',name);
            if (!error) {
                setQuestions(data)
            } else {
                console.error(error);
            }
        };
        fetchQuestions();
        console.log('done')
    }, []);
    console.log(questions[0])

    const renderItem = ({ item }) => (
            <View style={styles.questionItem}>
                <Button mode='text' onPress={()=>{navigation.navigate('Question',{question:item})}}>{item.text}</Button>
            </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Saved Questions</Text>
            
            {/* {questions.map((question)=>
                <View styles={styles.questionItem}>
                     <Button mode='contained' onPress={()=>{navigation.navigate('Question',{question:question})}}>{question.text}</Button>
                </View>
                            
            )} */}

            <FlatList
                            data={questions}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
            
            <Button mode='outlined' onPress={() => navigation.navigate('HomeScreen')}>
                Back To Home
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe0b2',  
        padding: 16,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#000',
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
        color: '#000',
    },
    textButton: {
        color: '#ff914d',  
    },
    backButton: {
        marginTop: 20,
        padding: 10,
        color: '#ff914d',        
    },
});