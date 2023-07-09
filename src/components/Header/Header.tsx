import React from 'react';
import { View, Text } from 'react-native';
import { format } from 'date-fns';
import Entypo from 'react-native-vector-icons/Entypo';
import { color } from '../../theme';
import { styles } from './styles';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Entypo name="calendar" size={20} color={color.white} />
      <Text style={styles.headerTitle}>{format(new Date(), "'Today,' dd MMMM")}</Text>
    </View>
  );
}

export { Header };
