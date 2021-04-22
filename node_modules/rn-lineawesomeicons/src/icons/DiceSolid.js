import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDiceSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12 1L0 13l12 12 12-12L12 1zm0 2.8l9.2 9.2-9.2 9.2L2.8 13 12 3.8zM12 8a1 1 0 100 2 1 1 0 000-2zm-4 4a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm10.8 1l-2 2H30v12H18v-5.2l-2 2V29h16V13h-5.2zM12 16a1 1 0 100 2 1 1 0 000-2zm12 4a1 1 0 100 2 1 1 0 000-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDiceSolid;
