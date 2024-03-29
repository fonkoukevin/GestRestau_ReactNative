/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
  TextInput
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Box } from "native-base";


import { Provider } from 'react-redux';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Login from './src/screens/Login';
import Home from './src/screens/Home';
import store from './src/store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NativeBaseProvider>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'gold'}
      />
      <NavigationContainer>
<Stack.Navigator>
      <Stack.Screen  options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen  options={{headerShown: false}} name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </NativeBaseProvider>
    </Provider>
  );
}



export default App;
