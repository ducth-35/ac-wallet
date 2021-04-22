import {StyleProp} from 'react-native';
export declare const getSymbols: (
  codeValue: string,
  codeLength: number,
) => any[];
export declare const getStyle: (
  base: StyleProp<any>,
  custom?: StyleProp<any>,
) => any;
export declare const isLastFilledCell: ({
  value,
  index,
}: {
  value: string;
  index: number;
}) => boolean;
