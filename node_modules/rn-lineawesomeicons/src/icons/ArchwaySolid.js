import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArchwaySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 6v6h2v12H3v2h10v-7c0-1.654 1.346-3 3-3s3 1.346 3 3v7h10v-2h-2V12h2V6H3zm2 2h22v2H5V8zm2 4h18v12h-4v-5c0-2.757-2.243-5-5-5s-5 2.243-5 5v5H7V12z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArchwaySolid;
