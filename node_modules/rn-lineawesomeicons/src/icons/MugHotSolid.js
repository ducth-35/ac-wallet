import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMugHotSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12 2v4h2V2h-2zm4 1v3h2V3h-2zM6 7v18c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3v-5h2c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3h-2V7H6zm2 2h14v16c0 .555-.445 1-1 1H9c-.555 0-1-.445-1-1V9zm16 4h2c.555 0 1 .445 1 1v3c0 .555-.445 1-1 1h-2v-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMugHotSolid;
