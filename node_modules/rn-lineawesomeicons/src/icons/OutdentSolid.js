import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgOutdentSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 7v2h13V7H3zm0 4v2h20v-2H3zm22 0v10l5-5-5-5zM3 15v2h20v-2H3zm0 4v2h20v-2H3zm0 4v2h13v-2H3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgOutdentSolid;
