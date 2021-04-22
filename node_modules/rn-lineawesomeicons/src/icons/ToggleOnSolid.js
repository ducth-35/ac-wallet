import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgToggleOnSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 7c-4.96 0-9 4.035-9 9s4.04 9 9 9h14c4.957 0 9-4.043 9-9s-4.043-9-9-9H9zm14 2c3.879 0 7 3.121 7 7s-3.121 7-7 7-7-3.121-7-7 3.121-7 7-7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgToggleOnSolid;
