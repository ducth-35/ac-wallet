import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVolumeMuteSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 4.594L13.281 6.28 8.562 11H4v10h4.563l4.718 4.719L15 27.406V4.594zm-2 4.843v13.126L9.719 19.28 9.406 19H6v-6h3.406l.313-.281L13 9.438zm7.219 2.344L18.78 13.22 21.563 16l-2.782 2.781 1.438 1.438L23 17.437l2.781 2.782 1.438-1.438L24.437 16l2.782-2.781-1.438-1.438L23 14.562l-2.781-2.78z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVolumeMuteSolid;
