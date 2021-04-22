import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTextHeightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 6v2h7v18h2V8h7V6H4zm21 .625L21.5 11H24v10h-2.5l3.5 4.375L28.5 21H26V11h2.5L25 6.625z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTextHeightSolid;
