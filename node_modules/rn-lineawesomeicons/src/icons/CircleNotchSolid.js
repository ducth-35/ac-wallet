import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCircleNotchSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M18 4.18v2.023c4.559.93 8 4.969 8 9.797 0 5.516-4.484 10-10 10S6 21.516 6 16c0-4.828 3.441-8.867 8-9.797V4.18C8.336 5.137 4 10.066 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.934-4.336-10.863-10-11.82z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCircleNotchSolid;
