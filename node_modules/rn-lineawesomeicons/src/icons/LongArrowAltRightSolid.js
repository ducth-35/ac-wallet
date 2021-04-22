import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLongArrowAltRightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M21.188 9.281L19.78 10.72 24.063 15H4v2h20.063l-4.282 4.281 1.407 1.438L27.905 16l-6.718-6.719z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLongArrowAltRightSolid;
