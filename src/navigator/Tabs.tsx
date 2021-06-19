import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {Platform, Text} from 'react-native';
import {TopTabsNavigator} from './TopTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: 'purple',
      }}
      inactiveColor="#3e2465"
      activeColor="green"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'alarm-outline';
              break;

            case 'Tab2Screen':
              iconName = '2';
              break;

            case 'StackNavigator':
              iconName = 'Stack';
              break;
          }

          return (
            <Icon style={{color}} name={iconName} size={25} color="#2bc48a" />
          );
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Alarm'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabsNavigator"
        options={{title: 'Tab2'}}
        component={TopTabsNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stacki'}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottonTabIos = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottonTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: 'red',
        labelPosition: 'beside-icon',
        labelStyle: {
          fontSize: 20,
        },
        style: {
          borderTopColor: 'green',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'Stack';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottonTabIos.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottonTabIos.Screen
        name="TopTabsNavigator"
        options={{title: 'Tab2'}}
        component={TopTabsNavigator}
      />
      <BottonTabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottonTabIos.Navigator>
  );
};
