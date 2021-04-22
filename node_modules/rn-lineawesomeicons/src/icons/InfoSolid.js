import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgInfoSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm-5 7v5h2v5h-2v5h10v-5h-2V13h-8zm2 2h4v10h2v1h-6v-1h2v-9h-2v-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgInfoSolid;
