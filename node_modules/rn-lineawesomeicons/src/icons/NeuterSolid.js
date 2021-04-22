import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNeuterSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4c-4.406 0-8 3.594-8 8 0 4.066 3.066 7.438 7 7.938V28h2v-8.063c3.934-.5 7-3.87 7-7.937 0-4.406-3.594-8-8-8zm0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgNeuterSolid;
