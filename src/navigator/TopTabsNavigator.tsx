import React from 'react';

import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {AlbumScreen} from '../screens/AlbumScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  //Es como el safearea
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: 'yellow',
        showIcon: true,
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        indicatorStyle: {
          backgroundColor: 'orange',
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'CH';
              break;

            case 'ContactScreen':
              iconName = 'CO';
              break;

            case 'AlbumScreen':
              iconName = 'AL';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
