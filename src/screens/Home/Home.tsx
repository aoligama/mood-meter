import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { Card } from '../../components/Card';
import { styles } from './styles';
import { color } from '../../theme';
import { feelings } from '../../utils';
import { MoodMeter } from '../../components/MoodMeter';
import { Chip } from '../../components/Chip';
import { MoodChart } from '../../components/MoodChart';
import { format } from 'date-fns';
import useMood from '../../hooks/useMood';

function Home() {
  const { rate: currRate, setFeelings, feelings: currFeelings, addNewEntry, chartData } = useMood();

  const handleFeelingPress = (value: string) => {
    if (currFeelings.includes(value)) {
      setFeelings(currFeelings.filter((feeling) => feeling !== value));
    } else {
      setFeelings([...currFeelings, value]);
    }
  };

  const handleAddEntry = () => {
    if (currRate && currFeelings.length > 0) {
      addNewEntry({
        datetime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        rate: currRate,
        feelings: currFeelings,
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card>
        <View style={styles.cardContent}>
          <Text style={styles.title}>How would you rate your mood?</Text>
          <MoodMeter />
          {currRate && (
            <>
              <Text style={styles.title}>How are you feeling?</Text>
              <View style={styles.feelingsHolder}>
                {feelings.map((feeling, index) => (
                  <Chip
                    key={index}
                    text={feeling.label}
                    isSelected={currFeelings.includes(feeling.value)}
                    onPress={() => handleFeelingPress(feeling.value)}
                  />
                ))}
              </View>
            </>
          )}
        </View>
        {currRate && currFeelings.length > 0 && (
          <View style={styles.buttonSpacing}>
            <Button title="Add Entry" onPress={() => handleAddEntry()} color={color.primary} />
          </View>
        )}
      </Card>
      {chartData.length > 0 && (
        <Card>
          <View style={styles.cardContent}>
            <Text style={styles.title}>Mood Chart</Text>
          </View>
          <View style={styles.chartsHolder}>
            <MoodChart />
          </View>
        </Card>
      )}
    </ScrollView>
  );
}

export { Home };
