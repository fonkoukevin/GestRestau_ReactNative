import React from 'react';
import Table from '../../components/Table';
import { useSelector } from 'react-redux';
import { ScrollView } from 'native-base';
import { Fab } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

export default function TableList({ navigation }) {
  const isFocus = useIsFocused();
  const tables = useSelector(state => state.tables.tables);

  return (
    <ScrollView>
      {isFocus ? (
        <Fab
          placement="bottom-right"
          style={{ marginBottom: 50 }}
          onPress={() => {
            navigation.navigate('TableForm');
          }}
          backgroundColor="gold"
          size="lg"
          icon={<Icon name="add-outline" color="white" size={25} />}
        />
      ) : null}

      {tables.map((table, index) => {
        return <Table key={index} table={table} />;
      })}
    </ScrollView>
  );
}
