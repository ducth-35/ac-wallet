import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCopy(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 4v20h7v-2H6V6h12v1h2V4H4zm8 4v20h16V8H12zm2 2h12v16H14V10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCopy;
