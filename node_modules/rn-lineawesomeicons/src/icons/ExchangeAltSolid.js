import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgExchangeAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M22.188 2.281L20.78 3.72 25.063 8H4v2h21.063l-4.282 4.281 1.407 1.438L28.905 9l-6.718-6.719zm-12.375 14L3.093 23l6.72 6.719 1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281-1.406-1.438z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgExchangeAltSolid;
