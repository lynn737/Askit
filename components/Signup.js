import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import supabase from '../SupabaseClient';
import { useNavigation } from '@react-navigation/native';


export default function SignupScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
  const handleSignup = async () => {
    const {data, error} = await supabase
        .from('Users')
        .insert([{username,password}])

    if (error) {
        console.log(error)
    } else {
      console.log('saved')
      navigation.navigate('HomeScreen',{username:username})
    }

}


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput placeholder="Email" style={styles.input} value={username} onChangeText={username => setUsername(username)} />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={password => setPassword(password)} />
      <Button title="Sign Up" color="#ff914d" onPress={()=>{handleSignup()}} />
      <Text style={styles.switchText}>
        Already have an account? <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.link}>Log in</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#ffe0b2' },
  header: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#000' },
  input: { height: 50, borderColor: '#000', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10, borderRadius: 5, backgroundColor: '#fff' },
  switchText: { marginTop: 20, textAlign: 'center', color: '#000' },
  link: { color: '#ff6f00', fontWeight: 'bold'}
});