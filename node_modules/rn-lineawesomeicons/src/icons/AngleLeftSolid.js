import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngleLeftSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M19.031 4.281l-11 11-.687.719.687.719 11 11 1.438-1.438L10.187 16 20.47 5.719 19.03 4.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngleLeftSolid;
