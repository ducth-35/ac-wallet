import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLongArrowAltDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 4v20.063l-4.281-4.282-1.438 1.407L16 27.905l6.719-6.718-1.438-1.407L17 24.063V4h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLongArrowAltDownSolid;
