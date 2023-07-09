import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';

function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text>Home Screen</Text>
    </ScrollView>
  );
}

export { Home };
