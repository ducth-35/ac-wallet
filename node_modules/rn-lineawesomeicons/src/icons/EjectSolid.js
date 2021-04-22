import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEjectSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 6.594l-.719.687-9 9L4.594 18h22.812l-1.687-1.719-9-9L16 6.594zm0 2.843L22.563 16H9.438L16 9.437zM4 22v2h24v-2H4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEjectSolid;
