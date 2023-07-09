import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { color } from '../../theme';
import { moodEmojis, moodRate } from '../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useMood from '../../hooks/useMood';

function MoodMeter() {
  const { rate: currRate, setRate } = useMood();

  const getOpacity = (index: number) => {
    return currRate === null ? 1 : currRate === moodRate[index] ? 1 : 0.5;
  };

  return (
    <View style={styles.container}>
      <View style={styles.emojiHolder}>
        {moodEmojis.map((emoji, index) => (
          <MaterialCommunityIcons
            key={index}
            name={emoji.name}
            size={35}
            style={{
              ...styles.emojiSpacing,
              opacity: getOpacity(index),
            }}
            color={emoji.color}
          />
        ))}
      </View>

      <View style={styles.rateHolder}>
        {moodRate.map((rate, index) => (
          <TouchableOpacity
            key={index}
            style={{
              ...styles.rateButton,
              borderColor: moodEmojis[index].color,
              backgroundColor: currRate === rate ? moodEmojis[index].color : color.white,
            }}
            onPress={() => setRate(rate)}
          >
            <Text
              style={{
                ...styles.rateText,
                color: rate === currRate ? color.black : moodEmojis[index].color,
              }}
            >
              {rate}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export { MoodMeter };
