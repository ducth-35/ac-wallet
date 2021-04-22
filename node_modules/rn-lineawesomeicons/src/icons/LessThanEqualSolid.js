import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLessThanEqualSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M26 5L6 13.219v1.562L26 23v-2.156L9.469 14 26 7.156V5zM6 25v2h20v-2H6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLessThanEqualSolid;
