import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngleDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4.219 10.781L2.78 12.22l12.5 12.5.719.687.719-.687 12.5-12.5-1.438-1.438L16 22.562 4.219 10.783z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngleDownSolid;
