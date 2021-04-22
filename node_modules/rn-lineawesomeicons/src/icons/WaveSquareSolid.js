import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWaveSquareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M8 6v9H2v2h8V8h5v18h9v-9h6v-2h-8v9h-5V6H8z" fill={props.fill} />
    </Svg>
  );
}

export default SvgWaveSquareSolid;
