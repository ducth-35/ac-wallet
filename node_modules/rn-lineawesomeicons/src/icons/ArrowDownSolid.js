import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 4v20.063L8.219 17.28 6.78 18.72l8.5 8.5.719.687.719-.687 8.5-8.5-1.438-1.438L17 24.063V4h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArrowDownSolid;
