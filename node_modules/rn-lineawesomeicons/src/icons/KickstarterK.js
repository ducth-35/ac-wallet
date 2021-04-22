import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgKickstarterK(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 5a3 3 0 00-3 3v16a3 3 0 106 0v-4.586l5.742 6.563A2.996 2.996 0 0022.002 27a2.999 2.999 0 002.256-4.975l-5.399-6.17L23.4 9.801a3.001 3.001 0 00-4.8-3.602L14 12.334V8a3 3 0 00-3-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgKickstarterK;
