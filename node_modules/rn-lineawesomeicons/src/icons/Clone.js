import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgClone(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v17h4v-2H7V7h13v2h2V5H5zm5 5v17h17V10H10zm2 2h13v13H12V12z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgClone;
