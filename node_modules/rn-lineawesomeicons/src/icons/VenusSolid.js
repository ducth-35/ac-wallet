import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVenusSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-4.406 0-8 3.594-8 8 0 4.066 3.066 7.438 7 7.938V23h-4v2h4v4h2v-4h4v-2h-4v-4.063c3.934-.5 7-3.87 7-7.937 0-4.406-3.594-8-8-8zm0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVenusSolid;
