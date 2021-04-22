import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSquare(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M6 6v20h20V6H6zm2 2h16v16H8V8z" fill={props.fill} />
    </Svg>
  );
}

export default SvgSquare;
