import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  //Tambien se puede navegar con este hook (Es mejor hacerlo con props)
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'atras', // Funciona es en Ios
    });
  }, []);

  return (
    <View>
      <Text style={styles.title}>Pagina 2 Screen</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
