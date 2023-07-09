import { TouchableOpacityProps } from 'react-native';

export interface IChip extends TouchableOpacityProps {
  text: string;
  isSelected: boolean;
}
