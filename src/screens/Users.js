import React from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './users/UserList';
import UserForm from './users/UserForm';


const Stack = createNativeStackNavigator();
export default function Users() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen   name="UserList" component={UserList} />
      <Stack.Screen   name="UserForm" component={UserForm} />
    </Stack.Navigator>
   
  );
}
