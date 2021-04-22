import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSignSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 4v2H4v2h2v20h2V8h20V6H8V4H6zm4 6v12h16V10H10zm2 2h12v8H12v-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSignSolid;
