import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconsSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h8v8H7V7zm10 0h8v8h-8V7zm-6 2l-3 4h6l-3-4zm8 0v4h4V9h-4zM7 17h8v8H7v-8zm10 0h8v8h-8v-8zm4 1l-2 3 2 3 2-3-2-3zm-10 1a1.999 1.999 0 100 4 1.999 1.999 0 100-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgIconsSolid;
