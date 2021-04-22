import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCalendarCheckSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5H9zM7 8h2v1h2V8h10v1h2V8h2v2H7V8zm0 4h18v14H7V12zm13.281 2.281L15 19.562l-2.281-2.28-1.438 1.437 3 3 .719.687.719-.687 6-6-1.438-1.438z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCalendarCheckSolid;
