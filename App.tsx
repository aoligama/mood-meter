import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import { StatusBar } from 'react-native';
import { AppRoutes } from './src/routes/AppRoutes';
import { Routes as NavRoutes } from './src/constants/RootStackParams';

const Routes = () => {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['mood-meter://'],
        config: {
          screens: {
            Home: 'home',
          },
          initialRouteName: NavRoutes.HOME,
        },
      }}
    >
      <Host>
        <StatusBar barStyle="light-content" backgroundColor="#FFF" />
        <AppRoutes />
      </Host>
    </NavigationContainer>
  );
};

const App = () => {
  return <Routes />;
};

export default App;
