import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Input,
  Stack,
  FormControl,
  VStack,
  Button,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  useDisclose,
  Actionsheet,
  Box,
} from 'native-base';
import { TouchableOpacity, Text} from 'react-native'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {storeUser} from '../../slices/users.slice';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    username: yup.string().required(),
    post: yup.string().required(),
    password: yup.string().required(),
    // photo: yup.string().required(),
  })
  .required();

export default function UserForm({navigation}) {
  const {isOpen, onOpen, onClose} = useDisclose();

  const {
    control,
    setValue,
    handleSubmit,
    formState,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(storeUser(data))
      .unwrap()
      .then(rep => {
        console.log(rep);
        navigate('/');
      });
  };


  return (
    <VStack space="2.5" mt="4" px="8">
      <FormControl>
        <Stack space={5}>
          <Stack>
            <Controller
              control={control}
              name="photo"
              render={({field: {onChange, value}}) => (
                <>
                  <FormControl.Label>Photo</FormControl.Label>
                  <TouchableOpacity

                    style={{
                        height:50,
                        display: 'flex',
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      alignItems:'center',
                      justifyContent:'center'
                    }}
                    onPress={onOpen}>
                    <Text style={{fontSize: 14, color:'black', flex:1}}> Choisir une photo</Text>
                  </TouchableOpacity>
                  <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content>
                      <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text
                          fontSize="16"
                          color="gray.500"
                          _dark={{
                            color: 'gray.300',
                          }}>
                          Albums
                        </Text>
                      </Box>
                      <Actionsheet.Item
                      onPress={()=> {

                      }}
                        startIcon={
                            <Icon name="camera-outline" size={25} />
                        }>
                        Prendre une photo
                      </Actionsheet.Item>

                      <Actionsheet.Item
                        startIcon={
                            <Icon name="folder-outline" size={25} />
                        }>
                       Choisir une Photo
                      </Actionsheet.Item>
                    </Actionsheet.Content>
                  </Actionsheet>
                </>
              )}
            />
          </Stack>

          <Stack>
            <Controller
              control={control}
              name="name"
              render={({field: {onChange, value}}) => (
                <>
                  <FormControl.Label>Name</FormControl.Label>
                  <Input
                    variant="underlined"
                    onChangeText={value => onChange(value)}
                    p={2}
                    placeholder="Name"
                    value={value}
                  />
                </>
              )}
            />
          </Stack>

          <Stack>
            <Controller
              control={control}
              name="username"
              render={({field: {onChange, value}}) => (
                <>
                  <FormControl.Label>Username</FormControl.Label>
                  <Input
                    variant="underlined"
                    onChangeText={value => onChange(value)}
                    p={2}
                    placeholder="Username"
                    value={value}
                  />
                </>
              )}
            />
          </Stack>

          <Stack>
            <Controller
              control={control}
              name="password"
              render={({field: {onChange, value}}) => (
                <>
                  <FormControl.Label>Password</FormControl.Label>
                  <Input
                    variant="underlined"
                    onChangeText={value => onChange(value)}
                    p={2}
                    placeholder="Password"
                    value={value}
                  />
                </>
              )}
            />
          </Stack>

          <Stack>
            <Controller
              control={control}
              name="post"
              render={({field: {onChange, value}}) => (
                <FormControl>
                  <FormControl.Label>Post</FormControl.Label>
                  <Select
                    minWidth="200"
                    variant="underlined"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    selectedValue={value}
                    onValueChange={val => {
                      console.log(val);
                      onChange(val);
                    }}
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />,
                    }}
                    mt="1">
                    <Select.Item label="Chef" value="chef" />
                    <Select.Item label="Caissier" value="caissier" />
                    <Select.Item label="Serveur" value="serveur" />
                  </Select>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    Please make a selection!
                  </FormControl.ErrorMessage>
                </FormControl>
              )}
            />
          </Stack>

          <Stack>
            <Button
              backgroundColor="gold"
              disabled={!formState.isValid}
              onPress={handleSubmit(data => {
                // console.log(data)
                dispatch(storeUser(data))
                  .unwrap()
                  .then(rep => {
                    console.log(rep);
                    navigation.navigate('UserList');
                  });
              })}>
              Success
            </Button>
          </Stack>
        </Stack>
      </FormControl>
    </VStack>
  );
}
