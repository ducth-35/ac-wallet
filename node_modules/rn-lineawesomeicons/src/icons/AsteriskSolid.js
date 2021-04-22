import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAsteriskSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17.7 17l6.198 8.398L21.5 27 16 18.3 10.5 27l-2.3-1.602L14.397 17l-9.296-2.398L6 12l9.102 3.2L14.5 5h3L17 15.2l9-3.2.8 2.7-9.1 2.3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAsteriskSolid;
