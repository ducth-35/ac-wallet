import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEnvelope(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 8v18h26V8H3zm4.313 2h17.375L16 15.781 7.312 10zM5 10.875l10.438 6.969.562.343.563-.343L27 10.875V24H5V10.875z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEnvelope;
