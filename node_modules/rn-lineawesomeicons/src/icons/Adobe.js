import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAdobe(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 6v20l8.9-20H4zm15.1 0L28 26V6h-8.9zM16 13.4L12.1 22h4.097l1.6 4H21.6L16 13.4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAdobe;
