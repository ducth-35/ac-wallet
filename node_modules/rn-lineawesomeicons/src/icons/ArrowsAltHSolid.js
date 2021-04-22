import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowsAltHSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9.281 6.781l-8.5 8.5L.094 16l.687.719 8.5 8.5 1.438-1.438L3.938 17h24.125l-6.782 6.781 1.438 1.438 8.5-8.5.687-.719-.687-.719-8.5-8.5L21.28 8.22 28.063 15H3.938l6.78-6.781L9.282 6.78z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArrowsAltHSolid;
