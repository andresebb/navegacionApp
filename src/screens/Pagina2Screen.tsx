import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Button} from 'react-native';

export const Pagina2Screen = () => {
  //Tambien se puede navegar con este hook (Es mejor hacerlo con props)
  const navigation = useNavigation();

  return (
    <View>
      <Text>Pagina 2 Screen</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
