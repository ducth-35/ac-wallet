import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCaretLeftSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M20 4.594L18.281 6.28l-9 9-.687.719.687.719 9 9L20 27.406V4.594zm-2 4.843v13.126L11.437 16 18 9.437z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCaretLeftSolid;
