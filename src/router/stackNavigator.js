import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {CHARACTERDETAIL, TAB} from '../utils/routes';
import CharacterDetail from '../screens/characterDetail';
import {themeColor} from '../theme/colors';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColor.bgColor,
        },
        headerTintColor: themeColor.green,
        headerTitleAlign: 'center',
        headerTitle: '',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
