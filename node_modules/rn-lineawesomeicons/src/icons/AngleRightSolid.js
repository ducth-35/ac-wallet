import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngleRightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12.969 4.281L11.53 5.72 21.812 16l-10.28 10.281 1.437 1.438 11-11 .687-.719-.687-.719-11-11z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngleRightSolid;
