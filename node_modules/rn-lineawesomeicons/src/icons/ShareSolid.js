import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M19.719 5.281L18.28 6.72 24.563 13H11c-3.855 0-7 3.145-7 7s3.145 7 7 7v-2c-2.773 0-5-2.227-5-5s2.227-5 5-5h13.563l-6.282 6.281 1.438 1.438 8-8 .687-.719-.687-.719-8-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgShareSolid;
