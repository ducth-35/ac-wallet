import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLevelUpAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17 4l-.719.688-8.5 8.5 1.438 1.439L16 7.844V26H6v2h12V7.844l6.781 6.781 1.438-1.438-8.5-8.5L17 4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLevelUpAltSolid;
