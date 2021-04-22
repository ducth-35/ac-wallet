import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgYCombinator(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4.5 4l3.5 6v5h2v-5l3.5-6h-2L16 15.281 13.5 11h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgYCombinator;
