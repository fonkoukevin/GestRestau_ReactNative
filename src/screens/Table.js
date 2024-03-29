import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fetchTables } from '../slices/table';

const Stack = createNativeStackNavigator();

export default function Tables() {
  const dispatch = useDispatch();
  const tables = useSelector(state => state.tables.tables);

  useEffect(() => {
    dispatch(fetchTables());
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="TableList" options={{ title: 'Tables' }}>
        {() => (
          <View>
            {tables.map(table => (
              <Text key={table.id}>{table.numTable}</Text>
            ))}
          </View>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
