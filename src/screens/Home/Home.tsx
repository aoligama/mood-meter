import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from '../../components/Card';
import { MoodMeter } from '../../components/MoodMeter';
import { styles } from './styles';

function Home() {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <View style={styles.cardContent}>
          <Text style={styles.title}>How would you rate your mood?</Text>
          <MoodMeter />
        </View>
      </Card>
    </ScrollView>
  );
}

export { Home };
