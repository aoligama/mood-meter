import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textSpacing: {
    marginBottom: 6,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  totalContainer: {
    width: 48,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 13,
    marginLeft: -8,
    backgroundColor: 'white',
  },
  barHolder: {
    width: 400,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    height: 16,
  },
  firstBar: {
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
  },
});
