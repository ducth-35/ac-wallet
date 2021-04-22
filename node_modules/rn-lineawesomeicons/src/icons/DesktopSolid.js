import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDesktopSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 6v18h13v2h-5v2h12v-2h-5v-2h13V6H2zm2 2h24v14H4V8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDesktopSolid;
