import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCalendarMinus(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5H9zM7 8h2v1h2V8h10v1h2V8h2v2H7V8zm0 4h18v14H7V12zm4 6v2h10v-2H11z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCalendarMinus;
