import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPollHSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm3 3v2h8v-2h-8zm0 5v2h12v-2H10zm0 5v2h6v-2h-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPollHSolid;
