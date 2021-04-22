import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgThSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 6v20h26V6H3zm2 2h4v4H5V8zm6 0h4v4h-4V8zm6 0h4v4h-4V8zm6 0h4v4h-4V8zM5 14h4v4H5v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM5 20h4v4H5v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgThSolid;
