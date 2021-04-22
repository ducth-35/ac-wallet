import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgExclamationCircleSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm-1 4v8h2v-8h-2zm0 10v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgExclamationCircleSolid;
