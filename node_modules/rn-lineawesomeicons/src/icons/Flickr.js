import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFlickr(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 5C6.355 5 5 6.355 5 8v16c0 1.645 1.355 3 3 3h16c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3H8zm0 2h16c.566 0 1 .434 1 1v16c0 .566-.434 1-1 1H8c-.566 0-1-.434-1-1V8c0-.566.434-1 1-1zm3.5 5.5a3.5 3.5 0 100 7 3.5 3.5 0 100-7zm9 0a3.5 3.5 0 100 7 3.5 3.5 0 100-7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFlickr;
