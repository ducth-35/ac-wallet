import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTerminalSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 5v22h24V5H4zm2 2h20v2H6V7zm0 4h20v14H6V11zm5.219 2.781L9.78 15.22 12.562 18l-2.78 2.781 1.437 1.438 3.5-3.5.687-.719-.687-.719-3.5-3.5zM16 20v2h6v-2h-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTerminalSolid;
