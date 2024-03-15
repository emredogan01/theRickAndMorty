import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters';
import Episodes from '../screens/episodes';
import Location from '../screens/locations';
import {CHARACTERS, EPISODES, LOCATIONS} from '../utils/routes';
import {themeColor} from '../theme/colors';
import {User, VideoPlay, Discover} from 'iconsax-react-native';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar backgroundColor={themeColor.bgColor} />
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTitleAlign: 'center',
          headerTintColor: themeColor.green,
          headerStyle: {
            backgroundColor: themeColor.bgColor,
          },
          tabBarStyle: {
            backgroundColor: themeColor.bgColor,
          },
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case CHARACTERS:
                return (
                  <User
                    size={size}
                    color={color}
                    variant={focused ? 'Bold' : 'Outline'}
                  />
                );
              case EPISODES:
                return (
                  <VideoPlay
                    size={size}
                    color={color}
                    variant={focused ? 'Bold' : 'Outline'}
                  />
                );
              case LOCATIONS:
                return (
                  <Discover
                    size={size}
                    color={color}
                    variant={focused ? 'Bold' : 'Outline'}
                  />
                );
            }
          },
          tabBarActiveTintColor: themeColor.green,
          tabBarInactiveTintColor: themeColor.green,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name={CHARACTERS} component={Characters} />
        <Tab.Screen name={EPISODES} component={Episodes} />
        <Tab.Screen name={LOCATIONS} component={Location} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
