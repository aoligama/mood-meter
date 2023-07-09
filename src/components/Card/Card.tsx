import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { ICard } from '../../interfaces';

function Card({ children }: ICard) {
  return <View style={styles.card}>{children}</View>;
}

export { Card };
