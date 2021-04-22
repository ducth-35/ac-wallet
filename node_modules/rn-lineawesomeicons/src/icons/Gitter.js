import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGitter(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 2v17h2V2H6zm6 4v24h2V6h-2zm6 0v24h2V6h-2zm6 0v13h2V6h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGitter;
