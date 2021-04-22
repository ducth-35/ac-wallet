import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChartBar(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 3v24h-2V7H5v20H3v2h26v-2h-2V14h-6v13h-2V3h-6zm2 2h2v22h-2V5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChartBar;
