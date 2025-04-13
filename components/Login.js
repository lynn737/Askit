import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import supabase from '../SupabaseClient';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const handleLogin = async () => {
    const { data, error } = await supabase
          .from('Users')
          .select('*')
          .eq('username',username)
          .single();
      if (!error) {
          if (data.username === username) {
            navigation.navigate('HomeScreen',{username: username})
            console.log('logging in')
    } else {
            Alert.alert('Login failed');
          }
      } else {
          console.error(error);
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log In</Text>
      <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={username => setUsername(username)} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={password => setPassword(password)} />
      <Button title="Login" color="#ff914d" onPress={()=>{handleLogin()}} />
      <Text style={styles.switchText}>
        Don’t have an account? <Text onPress={() => navigation.navigate('SignupScreen')} style={styles.link}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#ffe0b2'},
  header: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#000'},
  input: { height: 50, borderColor: '#000', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#fff'},
  switchText: { marginTop: 20, textAlign: 'center', color: '#000' },
  link: { color: '#ff6f00', fontWeight: 'bold' }
});