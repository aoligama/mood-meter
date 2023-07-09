import { StyleSheet } from 'react-native';
import { color } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    height: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.black,
  },
  cardContent: {
    alignItems: 'center',
  },
});
