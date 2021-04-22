import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPlusSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M15 5v10H5v2h10v10h2V17h10v-2H17V5h-2z" fill={props.fill} />
    </Svg>
  );
}

export default SvgPlusSolid;
