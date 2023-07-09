import { StyleSheet } from 'react-native';
import { color } from '../../theme';

export const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 10,
    backgroundColor: color.gray,
    padding: 10,
    borderRadius: 5,
  },
  selectedChip: {
    backgroundColor: color.primary,
  },
});
