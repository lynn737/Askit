import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import supabase from '../SupabaseClient';

export default function ViewQuestions() {
    const [questions, setQuestions] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchQuestions = async () => {
            const { data, error } = await supabase
                .from('Questions')
                .select('*');
            if (!error) {
                setQuestions(data);
            } else {
                console.error(error);
            }
        };
        fetchQuestions();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.questionItem}>
            <Text style={styles.questionText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Saved Questions</Text>
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
        backgroundColor: '#f4f4e2',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
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