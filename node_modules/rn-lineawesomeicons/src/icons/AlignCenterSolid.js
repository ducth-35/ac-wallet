import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAlignCenterSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 7v2h26V7H3zm4 4v2h18v-2H7zm-4 4v2h26v-2H3zm4 4v2h18v-2H7zm-4 4v2h26v-2H3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAlignCenterSolid;
