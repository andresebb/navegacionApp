import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  return (
    <View>
      <Text>Iconos</Text>
      <Icon name="airplane-outline" size={50} color="#2bc48a" />
      <Icon name="bicycle-outline" size={50} color="#2bc48a" />
    </View>
  );
};
