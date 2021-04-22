import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPlaySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 5.156v21.688l1.531-1L25.844 16 10.53 6.156 9 5.156zm2 3.657L22.156 16 11 23.188V8.813z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPlaySolid;
