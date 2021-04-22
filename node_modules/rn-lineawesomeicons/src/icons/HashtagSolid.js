import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHashtagSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 5v6H5v2h6v6H5v2h6v6h2v-6h6v6h2v-6h6v-2h-6v-6h6v-2h-6V5h-2v6h-6V5h-2zm2 8h6v6h-6v-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHashtagSolid;
