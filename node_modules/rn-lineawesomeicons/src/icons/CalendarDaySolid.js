import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCalendarDaySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4H9zM7 7h2v1h2V7h10v1h2V7h2v2H7V7zm0 4h18v14H7V11zm6 2v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-5 3v4h4v-4h-4zm-7 1v2h2v-2H9zm4 0v2h2v-2h-2zm8 0v2h2v-2h-2zM9 21v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCalendarDaySolid;
