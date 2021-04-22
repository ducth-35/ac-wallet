import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStackExchange(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 4C6.8 4 5 5.8 5 8v14c0 2.2 1.8 4 4 4h8v4.219h1.563l.312-.313L22.563 26H23c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4H9zm0 2h14c1.117 0 2 .883 2 2v1H7V8c0-1.117.883-2 2-2zm-2 5h18v3H7v-3zm0 5h18v3H7v-3zm0 5h18v1c0 1.117-.883 2-2 2h-1.313l-.28.313L19 26.843V24H9c-1.117 0-2-.883-2-2v-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStackExchange;
