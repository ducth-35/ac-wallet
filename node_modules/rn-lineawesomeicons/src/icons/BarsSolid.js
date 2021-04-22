import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBarsSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 7v2h24V7H4zm0 8v2h24v-2H4zm0 8v2h24v-2H4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBarsSolid;
