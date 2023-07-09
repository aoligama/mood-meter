import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { IChip } from '../../interfaces';
import { color } from '../../theme';

function Chip({ text, onPress, isSelected }: IChip) {
  const getBackgroundColor = () => {
    return isSelected ? color.primary : color.gray;
  };

  const getColor = () => {
    return isSelected ? color.white : color.black;
  };

  const getWeight = () => {
    return isSelected ? 'bold' : 'normal';
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.chip, backgroundColor: getBackgroundColor() }}
    >
      <Text
        style={{
          color: getColor(),
          fontWeight: getWeight(),
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export { Chip };
