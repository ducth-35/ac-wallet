import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBorderStyleSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h4v-2H7V7h18v2h2V5H5zm20 6v4h2v-4h-2zm0 6v4h2v-4h-2zm0 6v2h-2v2h4v-4h-2zm-14 2v2h4v-2h-4zm6 0v2h4v-2h-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBorderStyleSolid;
