import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRubleSignSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 6v10H9v2h2v2H9v2h2v4h2v-4h5v-2h-5v-2h6c3.3 0 6-2.7 6-6s-2.7-6-6-6h-8zm2 2h6c2.219 0 4 1.781 4 4 0 2.219-1.781 4-4 4h-6V8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRubleSignSolid;
