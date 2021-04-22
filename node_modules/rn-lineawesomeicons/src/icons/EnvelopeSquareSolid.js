import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEnvelopeSquareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm2 3v12h14V10H9zm2.813 2h8.374L16 14.781 11.812 12zM11 13.875l4.438 2.969.562.343.563-.343L21 13.875V20H11v-6.125z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEnvelopeSquareSolid;
