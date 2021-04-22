import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHubspot(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7.5 4a2.5 2.5 0 100 5 2.5 2.5 0 001.332-.389l7.486 5.641A5.97 5.97 0 0015 18a5.97 5.97 0 001.56 4.025l-3.044 3.045A2 2 0 0013 25a2 2 0 101.584 3.217 2 2 0 00.346-1.733l3.209-3.209h.002A6 6 0 0027 18a5.997 5.997 0 00-5.001-5.91V8.73A2 2 0 0021 5a2 2 0 00-1 3.73v3.36a5.957 5.957 0 00-2.15.812L9.957 6.955A2.5 2.5 0 007.5 4zM21 15c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHubspot;
