import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCalendarTimes(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5H9zM7 8h2v1h2V8h10v1h2V8h2v2H7V8zm0 4h18v14H7V12zm6.219 2.781L11.78 16.22 14.562 19l-2.78 2.781 1.437 1.438L16 20.437l2.781 2.782 1.438-1.438L17.437 19l2.782-2.781-1.438-1.438L16 17.562l-2.781-2.78z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCalendarTimes;
