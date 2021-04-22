import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTvSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 7v16h28V7H2zm2 2h24v12H4V9zm6 15v2h12v-2H10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTvSolid;
