import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWindowMinimizeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm2 13v2h14v-2H9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgWindowMinimizeSolid;
