import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAdjustSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2v20c-5.535 0-10-4.465-10-10S10.465 6 16 6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAdjustSolid;
