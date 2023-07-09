import React from 'react';
import { View } from 'react-native';
import useMood from '../../hooks/useMood';
import { BarChart } from '../BarChart';
import { barWidth } from '../../utils';

function MoodChart() {
  const { chartData } = useMood();
  return (
    <View>
      {chartData.map((data, index) => (
        <BarChart
          key={index}
          feeling={data.feeling}
          total={data.total}
          rates={data.rates}
          width={barWidth[index as keyof typeof barWidth]}
        />
      ))}
    </View>
  );
}

export { MoodChart };
