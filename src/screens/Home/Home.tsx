import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { Card } from '../../components/Card';
import { styles } from './styles';
import { color } from '../../theme';
import { feelings } from '../../utils';
import { MoodMeter } from '../../components/MoodMeter';
import { Chip } from '../../components/Chip';
import { format } from 'date-fns';
import useMood from '../../hooks/useMood';

function Home() {
  const { rate: currRate, setFeelings, feelings: currFeelings, addNewEntry } = useMood();

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
    </ScrollView>
  );
}

export { Home };
