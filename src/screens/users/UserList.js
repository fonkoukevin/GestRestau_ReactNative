0158import React from 'react'
import User from '../../components/User';
import { useSelector} from 'react-redux';
import { ScrollView } from 'native-base';
import { Fab } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';


export default function UserList({navigation}) {

    const isFocus = useIsFocused()
    const users = useSelector(state => state.users.users);

  return (
    <ScrollView >
        {isFocus? <Fab
      placement="bottom-right"
      style={{ marginBottom: 50}}
      onPress={()=>{navigation.navigate('UserForm')}}
      backgroundColor="gold"
      size="lg"
      icon={  <Icon name="add-outline" color='white' size={25} />}
    />:null}
     
      {users.map((stud, index) => {
        return <User key={index} user={stud} />;
      })}
    </ScrollView>
  )
}
