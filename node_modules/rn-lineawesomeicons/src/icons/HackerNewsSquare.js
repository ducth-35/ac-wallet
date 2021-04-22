import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHackerNewsSquare(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4 3l4 7v5h2v-5l4-7h-2l-3 5.25L13 10h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHackerNewsSquare;
