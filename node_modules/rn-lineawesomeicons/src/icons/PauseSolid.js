import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPauseSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M10 6v20h2V6h-2zm10 0v20h2V6h-2z" fill={props.fill} />
    </Svg>
  );
}

export default SvgPauseSolid;
