import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowLeftSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13.281 6.781l-8.5 8.5-.687.719.687.719 8.5 8.5 1.438-1.438L7.938 17H28v-2H7.937l6.782-6.781L13.28 6.78z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArrowLeftSolid;
