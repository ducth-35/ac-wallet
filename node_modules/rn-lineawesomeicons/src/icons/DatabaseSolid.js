import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDatabaseSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 4v24h20V4H6zm2 2h16v5H8V6zm0 7h16v6H8v-6zm0 8h16v5H8v-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDatabaseSolid;
