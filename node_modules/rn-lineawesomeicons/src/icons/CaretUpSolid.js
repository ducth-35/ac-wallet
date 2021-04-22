import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCaretUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 8.594l-.719.687-10 10L3.594 21h24.812l-1.687-1.719-10-10L16 8.594zm0 2.844L23.563 19H8.438L16 11.437z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCaretUpSolid;
