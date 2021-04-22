import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgKeyboard(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h26c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2H3zm0 2h26v14H3V9zm2 2v2h2v-2H5zm4 0v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM5 15v2h4v-2H5zm6 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h4v-2h-4zM5 19v2h4v-2H5zm6 0v2h10v-2H11zm12 0v2h4v-2h-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgKeyboard;
