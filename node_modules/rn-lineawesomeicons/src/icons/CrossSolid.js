import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCrossSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 3v6H7v6h6v14h6V15h6V9h-6V3h-6zm2 2h2v6h6v2h-6v14h-2V13H9v-2h6V5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCrossSolid;
