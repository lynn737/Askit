import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AddTextQuestion from './components/AddTextQuestion';
import AddFolder from './components/AddFolder';
import Search from './components/Search'; 
import Folder from './components/Folder';
import Question from './components/Question'
import LoginScreen from './components/Login';
import SignupScreen from './components/Signup';


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddTextQuestion" component={AddTextQuestion} />

      <Stack.Screen name="AddFolder" component={AddFolder} />

      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Folder" component={Folder} />
      <Stack.Screen name="Question" component={Question} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}


