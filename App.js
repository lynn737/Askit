import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AddTextQuestion from './components/AddTextQuestion';

import AddFolder from './components/AddFolder';

import ViewQuestions from './components/ViewQuestions'; 


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddTextQuestion" component={AddTextQuestion} />

      <Stack.Screen name="AddFolder" component={AddFolder} />

      <Stack.Screen name="ViewQuestions" component={ViewQuestions} />

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


