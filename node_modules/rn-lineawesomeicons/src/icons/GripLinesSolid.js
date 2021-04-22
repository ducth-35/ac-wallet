import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGripLinesSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M3 11v2h26v-2H3zm0 8v2h26v-2H3z" fill={props.fill} />
    </Svg>
  );
}

export default SvgGripLinesSolid;
