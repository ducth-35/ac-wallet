import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgExternalLinkSquareAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm6 3v2h5.563L9.28 21.281l1.438 1.438L20 13.437V19h2v-9h-9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgExternalLinkSquareAltSolid;
