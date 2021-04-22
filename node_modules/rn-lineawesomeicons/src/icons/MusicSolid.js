import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMusicSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M27 3.781l-1.188.25-16 3L9 7.156v13.407A3.929 3.929 0 007 20c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V12.812l14-2.624v7.374A3.929 3.929 0 0023 17c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V3.781zm-2 2.406v2l-14 2.626v-2l14-2.626zM23 19c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zM7 22c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMusicSolid;
