import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCircleSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.379 4 4 9.379 4 16s5.379 12 12 12 12-5.379 12-12S22.621 4 16 4zm0 1c6.082 0 11 4.918 11 11s-4.918 11-11 11S5 22.082 5 16 9.918 5 16 5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCircleSolid;
