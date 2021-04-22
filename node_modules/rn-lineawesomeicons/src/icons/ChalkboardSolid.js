import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChalkboardSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 7v16H3v2h26v-2h-2V7H5zm2 2h18v14H7V9zm14.281 3.281L17 16.562l-3.281-3.28-.719-.688-.719.687-3 3 1.438 1.438L13 15.437l3.281 3.282.719.687.719-.687 5-5-1.438-1.438zM20 20l-1 1 1 1h4v-2h-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChalkboardSolid;
