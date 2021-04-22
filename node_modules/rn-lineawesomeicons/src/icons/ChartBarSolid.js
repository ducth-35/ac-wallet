import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChartBarSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M21 4v24h8V4h-8zm2 2h4v20h-4V6zM3 10v18h8V10H3zm2 2h4v14H5V12zm7 4v12h8V16h-8zm2 2h4v8h-4v-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChartBarSolid;
