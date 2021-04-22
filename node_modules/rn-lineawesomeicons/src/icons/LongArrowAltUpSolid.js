import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLongArrowAltUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4.094l-6.719 6.718 1.438 1.407L15 7.938V28h2V7.937l4.281 4.282 1.438-1.406L16 4.093z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLongArrowAltUpSolid;
