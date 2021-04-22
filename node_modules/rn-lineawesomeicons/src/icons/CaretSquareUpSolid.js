import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCaretSquareUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm9 4.094l-.719.687-6 6 1.438 1.438L16 13.937l5.281 5.282 1.438-1.438-6-6-.719-.687z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCaretSquareUpSolid;
