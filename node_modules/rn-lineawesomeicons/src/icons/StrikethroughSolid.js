import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStrikethroughSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M7 6v2h8v8h-5v2h5v8h2v-8h5v-2h-5V8h8V6H7z" fill={props.fill} />
    </Svg>
  );
}

export default SvgStrikethroughSolid;
