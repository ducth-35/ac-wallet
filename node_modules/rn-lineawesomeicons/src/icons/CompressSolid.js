import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCompressSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 4v7H4v2h9V4h-2zm8 0v9h9v-2h-7V4h-2zM4 19v2h7v7h2v-9H4zm15 0v9h2v-7h7v-2h-9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCompressSolid;
