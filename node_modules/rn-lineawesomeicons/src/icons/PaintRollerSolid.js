import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPaintRollerSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 4v8h18V4H5zm2 2h14v4H7V6zm17 1v2h1v4.25l-9.281 2.781-.719.219V19h-2v9h6v-9h-2v-1.25l9.281-2.781.719-.219V7h-3zm-9 14h2v5h-2v-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPaintRollerSolid;
