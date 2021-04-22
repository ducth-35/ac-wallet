import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFlagCheckeredSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 4v24h2v-8h20V4H5zm2 2h3v3h3V6h3v3h3V6h3v3h3v3h-3v3h3v3h-3v-3h-3v3h-3v-3h-3v3h-3v-3H7v-3h3V9H7V6zm3 6v3h3v-3h-3zm3 0h3V9h-3v3zm3 0v3h3v-3h-3zm3 0h3V9h-3v3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFlagCheckeredSolid;
