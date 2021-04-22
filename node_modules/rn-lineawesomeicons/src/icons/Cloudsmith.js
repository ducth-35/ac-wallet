import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCloudsmith(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M18.854 3c-2.41 0-4.563 1.95-4.563 4.35 0 2.41-1.531 3.941-3.941 3.941-2.4 0-4.35 2.152-4.35 4.563C6 18.264 7.95 20 10.35 20c2.41 0 4.357-1.733 4.357-4.145 0-2.41 1.736-4.146 4.146-4.146 2.4 0 4.147-1.95 4.147-4.36C23 4.952 21.253 3 18.854 3zm.652 17a4.501 4.501 0 10-.01 9.002 4.501 4.501 0 00.01-9.002z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCloudsmith;
