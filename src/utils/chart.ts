import { Dimensions } from 'react-native';

export const barWidth = {
  0: Dimensions.get('window').width * 0.9 - 70,
  1: Dimensions.get('window').width * 0.8 - 70,
  2: Dimensions.get('window').width * 0.7 - 70,
  3: Dimensions.get('window').width * 0.6 - 70,
};
