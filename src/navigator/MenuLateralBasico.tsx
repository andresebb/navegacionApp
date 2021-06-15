import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingScreen} from '../screens/SettingScreen';
import {StackNavigator} from './StackNavigator';
import {useWindowDimensions} from 'react-native';
const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};
