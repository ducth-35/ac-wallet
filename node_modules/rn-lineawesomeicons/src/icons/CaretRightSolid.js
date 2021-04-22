import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCaretRightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12 4.594v22.812l1.719-1.687 9-9 .687-.719-.687-.719-9-9L12 4.594zm2 4.843L20.563 16 14 22.563V9.438z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCaretRightSolid;
