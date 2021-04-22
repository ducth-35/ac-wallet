import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTrashAlt(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 4c-.523 0-1.059.184-1.438.563C13.184 4.94 13 5.476 13 6v1H7v2h1v16c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V9h1V7h-6V6c0-.523-.184-1.059-.563-1.438C20.06 4.184 19.523 4 19 4h-4zm0 2h4v1h-4V6zm-5 3h14v16c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1V9zm2 3v11h2V12h-2zm4 0v11h2V12h-2zm4 0v11h2V12h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTrashAlt;
