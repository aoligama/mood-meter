import React from 'react';
import { View, Text } from 'react-native';
import { IChartData } from '../../interfaces';
import { styles } from './styles';
import { moodEmojis } from '../../utils';

interface IBarChart extends IChartData {
  width: number;
}

function BarChart({ feeling, total, rates, width }: IBarChart) {
  return (
    <View style={styles.container}>
      <View style={styles.textSpacing}>
        <Text style={styles.text}>{feeling}</Text>
      </View>
      <View style={{ ...styles.barHolder, width: width }}>
        {rates.map((rate, index) => (
          <View
            key={index}
            style={{
              ...styles.bar,
              ...(index === 0 && styles.firstBar),
              backgroundColor: moodEmojis[rate - 1].color,
              width: `${(1 / rates.length) * 100}%`,
            }}
          />
        ))}
        <View style={styles.totalContainer}>
          <Text style={styles.text}>{total ?? 0}</Text>
        </View>
      </View>
    </View>
  );
}

export { BarChart };
