import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEllipsisVSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 6a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm0 8a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm0 8a1.999 1.999 0 100 4 1.999 1.999 0 100-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEllipsisVSolid;
