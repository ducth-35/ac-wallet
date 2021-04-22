import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgListAlt(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.281 5.281L7 8.563 5.719 7.28 4.28 8.72l2 2 .719.687.719-.687 4-4L10.28 5.28zM15 7v2h13V7H15zm-4.719 6.281L7 16.562l-1.281-1.28-1.438 1.437 2 2 .719.687.719-.687 4-4-1.438-1.438zM15 15v2h13v-2H15zm-4.719 6.281L7 24.563 5.719 23.28 4.28 24.72l2 2 .719.687.719-.687 4-4-1.438-1.438zM15 23v2h13v-2H15z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgListAlt;
