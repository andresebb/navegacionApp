import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';

// Las props nos llegan debido al stackNavigator que creamos
interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Pagina Screen 1</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
    </View>
  );
};
