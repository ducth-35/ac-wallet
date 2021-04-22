import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTimesSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7.219 5.781L5.78 7.22 14.563 16 5.78 24.781 7.22 26.22 16 17.437l8.781 8.782 1.438-1.438L17.437 16l8.782-8.781L24.78 5.78 16 14.563 7.219 5.78z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTimesSolid;
