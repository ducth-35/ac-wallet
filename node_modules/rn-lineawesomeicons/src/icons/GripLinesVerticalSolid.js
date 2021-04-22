import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGripLinesVerticalSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path d="M11 3v26h2V3h-2zm8 0v26h2V3h-2z" fill={props.fill} />
    </Svg>
  );
}

export default SvgGripLinesVerticalSolid;
