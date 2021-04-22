import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgYenSignSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7.188 5l6.875 11H10v2h5v2h-5v2h5v5h2v-5h5v-2h-5v-2h5v-2h-4.063l6.875-11h-2.375L16 15.344 9.562 5H7.188z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgYenSignSolid;
