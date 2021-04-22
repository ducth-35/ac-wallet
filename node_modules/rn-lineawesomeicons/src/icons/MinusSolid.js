import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMinusSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M5 15v2h22v-2H5z" fill={props.fill} />
    </Svg>
  );
}

export default SvgMinusSolid;
