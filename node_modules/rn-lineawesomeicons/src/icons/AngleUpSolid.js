import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngleUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 6.594l-.719.687-12.5 12.5L4.22 21.22 16 9.437 27.781 21.22l1.438-1.438-12.5-12.5L16 6.594z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngleUpSolid;
