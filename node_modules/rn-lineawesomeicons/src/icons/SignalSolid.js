import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSignalSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M21 4v24h6V4h-6zm-8 7v17h6V11h-6zm-8 7v10h6V18H5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSignalSolid;
