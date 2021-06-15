import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

// Las props nos llegan debido al stackNavigator que creamos
// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View>
      <Text style={styles.title}>Pagina Screen 1</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856DE'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Jose Perez',
              titulo: 'Esta es la pagina props',
            })
          }>
          <Text style={styles.botonGrandeTexto}>
            Navegacion con props Click here
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Maria Perez',
              titulo: 'Aquii a maria',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Toca a maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
