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
import { TouchableOpacity, Text } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { storeTable } from '../../slices/tables.slice';

const schema = yup.object().shape({
  numTable: yup.string().required(),
  placesNumbers: yup.number().required(),
  shape: yup.string().required(),
  position: yup.string().required(),
  // photo: yup.string().required(),
});

export default function TableForm({ navigation }) {
  const { isOpen, onOpen, onClose } = useDisclose();

  const {
    control,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(storeTable(data))
      .unwrap()
      .then(rep => {
        console.log(rep);
        navigation.navigate('/');
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
              render={({ field: { onChange, value } }) => (
                <>
                  <FormControl.Label>Photo</FormControl.Label>
                  <TouchableOpacity
                    style={{
                      height: 50,
                      display: 'flex',
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={onOpen}
                  >
                    <Text style={{ fontSize: 14, color: 'black', flex: 1 }}>
                      Choisissez une photo
                    </Text>
                  </TouchableOpacity>
                  <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content>
                      <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{ color: 'gray.300' }}>
                          Albums
                        </Text>
                      </Box>
                      <Actionsheet.Item onPress={() => {}} startIcon={<Icon name="camera-outline" size={25} />}>
                        Prendre une photo
                      </Actionsheet.Item>
                      <Actionsheet.Item startIcon={<Icon name="folder-outline" size={25} />}>
                        Choisir une photo
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
              name="numTable"
              render={({ field: { onChange, value } }) => (
                <>
                  <FormControl.Label>Numéro de table</FormControl.Label>
                  <Input
                    variant="underlined"
                    onChangeText={value => onChange(value)}
                    p={2}
                    placeholder="Numéro de table"
                    value={value}
                  />
                </>
              )}
            />
          </Stack>

          <Stack>
            <Controller
              control={control}
              name="placesNumbers"
              render={({ field: { onChange, value } }) => (
                <>
                  <FormControl.Label>Nombre de places</FormControl.Label>
                  <Input
                    variant="underlined"
                    onChangeText={value => onChange(value)}
                    p={2}
                    placeholder="Nombre de places"
                    value={value}
                  />
                </>
              )}
            />
          </Stack>

          <Stack>
            <Controller
              control={control}
              name="shape"
              render={({ field: { onChange, value } }) => (
                <>
                  <FormControl.Label>Forme</FormControl.Label>
                  <Input
                    variant="underlined"
                    onChangeText={value => onChange(value)}
                    p={2}
                    placeholder="Forme"
                    value={value}
                  />
                </>
              )}
            />
          </Stack>

          <Stack>
            <Controller
              control={control}
              name="position"
              render={({ field: { onChange, value } }) => (
                <FormControl>
                  <FormControl.Label>Position</FormControl.Label>
                  <Select
                    minWidth="200"
                    variant="underlined"
                    accessibilityLabel="Choose Service"
                    placeholder="Choisir une position"
                    selectedValue={value}
                    onValueChange={val => {
                      console.log(val);
                      onChange(val);
                    }}
                    _selectedItem={{
                      bg: 'teal.600',
                      endIcon: <CheckIcon size={5} />,
                    }}
                    mt="1"
                  >
                    <Select.Item label="Centre" value="center" />
                    <Select.Item label="Coin" value="corner" />
                    <Select.Item label="Près des fenêtres" value="besides windows" />
                  </Select>
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Veuillez faire une sélection !
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
                dispatch(storeTable(data))
                  .unwrap()
                  .then(rep => {
                    console.log(rep);
                    navigation.navigate('TableList');
                  });
              })}
            >
              Success
            </Button>
          </Stack>
        </Stack>
      </FormControl>
    </VStack>
  );
}
