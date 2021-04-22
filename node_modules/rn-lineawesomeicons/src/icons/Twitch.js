import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTwitch(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6.5 5L5 9v16h5.5v3h3l3-3H21l6-6V5H6.5zM9 7h16v11l-3 3h-6l-3 3v-3H9V7zm5 4v6h2v-6h-2zm5 0v6h2v-6h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTwitch;
