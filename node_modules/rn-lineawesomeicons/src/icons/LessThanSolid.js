import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLessThanSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M26 6L6 15.219v1.562L26 26v-2.156L9.469 16 26 8.156V6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLessThanSolid;
