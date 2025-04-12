import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import supabase from '../SupabaseClient';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data, error } = await supabase
          .from('Users')
          .select('*')
          .eq('username',username)
          .single();
      if (!error) {
          if (data.username === username) {
            navigation.navigate('HomeScreen')
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
      <Button title="Login" onPress={()=>{handleLogin()}} />
      <Text style={styles.switchText}>
        Don’t have an account? <Text onPress={() => navigation.navigate('SignupScreen')} style={styles.link}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 50, borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10, borderRadius: 5 },
  switchText: { marginTop: 20, textAlign: 'center' },
  link: { color: 'blue' }
});