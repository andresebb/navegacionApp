import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect} from 'react';

//Esta sera la forma suciade obtener las props con el tipado

interface Props extends StackScreenProps<any, any> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.titulo,
    });
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
