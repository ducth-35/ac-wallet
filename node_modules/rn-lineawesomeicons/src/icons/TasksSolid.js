import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTasksSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.293 5.293L7 8.586 5.707 7.293 4.293 8.707 7 11.414l4.707-4.707-1.414-1.414zM14 7v2h14V7H14zm0 8v2h14v-2H14zm0 8v2h14v-2H14z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTasksSolid;
