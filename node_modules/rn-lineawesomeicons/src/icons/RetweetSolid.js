import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRetweetSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 7l-5 5h4v13h17l-2-2H6V12h4L5 7zm4 0l2 2h13v11h-4l5 5 5-5h-4V7H9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRetweetSolid;
