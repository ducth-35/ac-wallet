import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStreamSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v6h19V5H5zm2 2h15v2H7V7zm2 6v6h19v-6H9zm2 2h15v2H11v-2zm-6 6v6h19v-6H5zm2 2h15v2H7v-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStreamSolid;
