import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLongArrowAltLeftSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.813 9.281L4.093 16l6.72 6.719 1.406-1.438L7.938 17H28v-2H7.937l4.282-4.281-1.406-1.438z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLongArrowAltLeftSolid;
