import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTagsSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M14.594 4l-.313.281-11 11-.687.719.687.719 9 9 .719.687.719-.687 11-11 .281-.313V4H14.594zm.844 2H23v7.563l-10 10L5.437 16l10-10zM26 7v2h1v8.156l-9.5 9.438-1.25-1.25-1.406 1.406 1.937 1.969.719.687.688-.687 10.53-10.407L29 18V7h-3zm-6 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTagsSolid;
