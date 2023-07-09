import { StyleSheet } from 'react-native';
import { color } from '../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  headerTitle: {
    color: color.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
