import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPlusSquareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm8 4v4h-4v2h4v4h2v-4h4v-2h-4v-4h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPlusSquareSolid;
