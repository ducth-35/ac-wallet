import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUikit(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M22.2 6.7l-4.3 2.5 5.1 2.9v7.8L16 24l-7-4.1v-5.5L5 12v10.5L16 29l11-6.5v-13l-4.8-2.8zm-2-1.2L16 3l-4.2 2.5L16 8l4.2-2.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUikit;
