import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFlag(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v24h2V19h8v3h12V8H17V5H5zm2 2h8v10H7V7zm10 3h8v10h-8V10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFlag;
