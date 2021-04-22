import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgKorvue(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm3 3v5.88h7.81L21.509 10h-4.584L14 15.506V10h-4zm0 6.5v5.47h4v-5.175l3 5.176h4.814L18.111 16.5H10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgKorvue;
