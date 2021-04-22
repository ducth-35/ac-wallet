import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSortDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3.594 12l1.687 1.719 10 10 .719.687.719-.687 10-10L28.406 12H3.594zm4.844 2h15.124L16 21.563 8.437 14z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSortDownSolid;
