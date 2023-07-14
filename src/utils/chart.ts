import { Dimensions } from 'react-native';
import { IChartData } from '../interfaces';

export const calculateBarWidth = (total: number, chartData: IChartData[]) => {
  const width = Dimensions.get('window').width * 0.9 - 70;
  const percentage = (total / chartData[0].total) * 100;
  const calculatedWidth = (percentage / 100) * width;
  return calculatedWidth;
};
