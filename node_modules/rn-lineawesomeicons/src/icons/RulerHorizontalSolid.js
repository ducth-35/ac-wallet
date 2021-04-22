import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRulerHorizontalSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M0 8v16h32V8H0zm2 2h3v7h2v-7h2v4h2v-4h2v7h2v-7h2v4h2v-4h2v7h2v-7h2v4h2v-4h3v12H2V10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRulerHorizontalSolid;
