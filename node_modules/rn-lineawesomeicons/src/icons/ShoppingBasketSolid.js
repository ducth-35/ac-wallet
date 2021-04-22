import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShoppingBasketSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.094L7.094 12H2v6h1.25l2.781 9.281.219.719h19.5l.219-.719L28.75 18H30v-6h-5.094L16 3.094zm0 2.844L22.063 12H9.938L16 5.937zM4 14h24v2h-.75l-.219.719L24.25 26H7.75l-2.781-9.281L4.75 16H4v-2zm7 3v7h2v-7h-2zm4 0v7h2v-7h-2zm4 0v7h2v-7h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgShoppingBasketSolid;
