import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTagSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 5l-.313.281L4.281 16.813l-.687.687.687.719 9.5 9.5.719.687.688-.687 11.53-11.407L27 16V5H16zm.844 2H25v8.156L14.5 25.594 6.406 17.5 16.844 7zM22 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTagSolid;
