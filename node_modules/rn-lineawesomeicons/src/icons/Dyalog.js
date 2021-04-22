import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDyalog(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 5v7h2V7h7c4.962 0 9 4.038 9 9s-4.038 9-9 9H6v2h9c6.065 0 11-4.935 11-11S21.065 5 15 5H6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDyalog;
