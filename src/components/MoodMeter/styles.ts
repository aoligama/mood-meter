import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  emojiHolder: {
    marginTop: 25,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emojiSpacing: {
    marginHorizontal: 10,
  },
  rateHolder: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  rateButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  rateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
