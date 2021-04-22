import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgExpandSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 4v9h2V6h7V4H4zm15 0v2h7v7h2V4h-9zM4 19v9h9v-2H6v-7H4zm22 0v7h-7v2h9v-9h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgExpandSolid;
