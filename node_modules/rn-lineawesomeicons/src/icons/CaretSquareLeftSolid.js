import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCaretSquareLeftSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm10.781 2.281l-6 6-.687.719.687.719 6 6 1.438-1.438L13.937 16l5.282-5.281L17.78 9.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCaretSquareLeftSolid;
