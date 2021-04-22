import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgReplyAllSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.281 5.281l-8 8-.687.719.687.719 8 8 1.438-1.438L4.438 14l7.28-7.281-1.437-1.438zm5 0l-8 8-.687.719.687.719 8 8 1.438-1.438L10.437 15H23c2.773 0 5 2.227 5 5s-2.227 5-5 5v2c3.855 0 7-3.145 7-7s-3.145-7-7-7H10.437l6.282-6.281L15.28 5.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgReplyAllSolid;
