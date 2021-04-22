import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSlashSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M26.281 4.281l-22 22L5.72 27.72l22-22L26.28 4.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSlashSolid;
