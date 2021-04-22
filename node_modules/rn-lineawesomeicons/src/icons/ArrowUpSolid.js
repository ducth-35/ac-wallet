import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4.094l-.719.687-8.5 8.5L8.22 14.72 15 7.938V28h2V7.937l6.781 6.782 1.438-1.438-8.5-8.5L16 4.094z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArrowUpSolid;
