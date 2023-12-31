import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams, Routes } from '../constants/RootStackParams';
import { color } from '../theme';
import { Home } from '../screens/Home';
import { Header } from '../components/Header';

const Stack = createNativeStackNavigator<RootStackParams>();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={{
        headerShown: true,
        headerTitle: () => <Header />,
        headerStyle: {
          backgroundColor: color.primary,
        },
        headerTitleAlign: 'left',
        headerTintColor: color.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name={Routes.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export { AppRoutes };
