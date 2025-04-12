import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AddTextQuestion from './components/AddTextQuestion';
import AddFolder from './components/AddFolder';
import Search from './components/Search'; 
import Folder from './components/Folder';
import Question from './components/Question'
import Login from './components/LoginScreen';
import Signup from './components/SignupScreen';


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
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


