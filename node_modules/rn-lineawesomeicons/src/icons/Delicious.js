import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDelicious(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10 5c-2.75 0-5 2.25-5 5v12c0 2.75 2.25 5 5 5h12c2.75 0 5-2.25 5-5V10c0-2.75-2.25-5-5-5H10zm0 2h6v9h9v6c0 1.668-1.332 3-3 3h-6v-9H7v-6c0-1.668 1.332-3 3-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDelicious;
