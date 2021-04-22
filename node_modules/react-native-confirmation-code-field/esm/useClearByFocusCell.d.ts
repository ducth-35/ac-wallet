import {LayoutChangeEvent} from 'react-native';
declare type Options = {
  setValue: (text: string) => void;
  value?: string;
};
declare const useClearByFocusCell: (
  options: Options,
) => [
  Record<string, unknown>,
  (index: number) => (event: LayoutChangeEvent) => void,
];
export default useClearByFocusCell;
