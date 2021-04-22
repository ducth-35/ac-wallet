import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBlackTie(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm5 2l2.813 3.625L12 20.375 16 24l4-3.625-2.813-7.75L20 9h-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBlackTie;
