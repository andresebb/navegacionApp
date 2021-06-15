import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

//Esta sera la forma suciade obtener las props con el tipado
//FORMA: 1
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

//Otra forma de hacerlo
//FORMA 2
// interface Routerparams {
//   id: number;
//   persona: string;
//   titulo: string;
// }

//Esta es la recomendada
//FORMA 3

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.titulo,
    });
  }, []);

  //FORMA 2
  // const params = route.params as Routerparams;

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: params.titulo,
  //   });
  // }, []);

  return (
    <View>
      <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
