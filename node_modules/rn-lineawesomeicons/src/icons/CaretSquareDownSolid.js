import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCaretSquareDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm3.719 5.781L9.28 14.22l6 6 .719.687.719-.687 6-6-1.438-1.438L16 18.062l-5.281-5.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCaretSquareDownSolid;
