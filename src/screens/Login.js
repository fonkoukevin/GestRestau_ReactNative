import React, {useEffect} from 'react';
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
  TextInput,
} from 'react-native';
import bg from '../assets/bg.jpg';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../slices/auth.slice';


const schema = yup
  .object()
  .shape({
    login: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export default function Login({navigation}) {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const dispatch = useDispatch();

  const {
    control,
    setValue,
    handleSubmit,
    formState,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});
  const isLogged = useSelector(state => state.auth.isLogged);
  useEffect(() => {
    if (isLogged) navigation.navigate('Home');
  }, [isLogged]);
  return (
    <ImageBackground style={styles.center} source={bg} resizeMode="cover">
      <View style={[styles.center, styles.bblack]}>
        <Text style={styles.text} color={'white'}>
          Bienvenue
        </Text>
        <Controller
          control={control}
          name="login"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.input}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, value}}) => (
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
        />

        <TouchableOpacity
          style={[styles.button]}
          onPress={handleSubmit(data => {
            console.log(data)
            dispatch(signIn(data));
          })}>
          <Text style={[styles.buttonText]}> Connexion</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  bblack: {backgroundColor: '#000000c0', flex: 1, width: '100%'},
  text: {color: 'white', fontSize: 40},
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    color: 'white',
    width: 300,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  button: {
    width: 300,
    borderRadius: 10,
    backgroundColor: 'gold',
    justifyContent: 'center',
    height: 50,
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
