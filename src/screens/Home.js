import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../slices/users.slice';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Users from './Users';
import Menu from './Menu';
import Table from './Table';

const Tab = createBottomTabNavigator();

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor:"gold"
    }}>
      <Tab.Screen
        options={{
          headerShown:false,
          tabBarIcon: ({color}) => (
            <Icon name="people-outline" color={color} size={25} />
          ),
        }}
        name="Employe"
        component={Users}
      />
      <Tab.Screen 
       options={{
        tabBarIcon: ({color}) => 
        {
          console.log(color)
         return (<Icon name="restaurant-outline" color={color} size={25} />)
       },
      }}
      name="Menu" component={Menu} />
      <Tab.Screen 
       options={{
        tabBarIcon: ({color}) => (
          <Icon name="location-outline" color={color} size={25} />
        ),
      }}
      name="Table" component={Table} />
      {/* <Tab.Screen name="Logout" component={Logout} /> */}
    </Tab.Navigator>
  );
}
