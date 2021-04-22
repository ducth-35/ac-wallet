import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCropSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 4v4H4v2h4v14h14v4h2v-4h4v-2H11.437L22 11.437V21h2V9.437l3.719-3.718L26.28 4.28 22.563 8H11v2h9.563L10 20.563V4H8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCropSolid;
