import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPalletSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6.125 5L6 5.844l-2 14V27h6v-2h12v2h6v-7.156l-2-14L25.875 5H6.125zm1.75 2h2.063l-.876 12H6.156L7.875 7zm4.063 0H15v12h-3.938l.876-12zM17 7h3.063l.875 12H17V7zm5.063 0h2.062l1.719 12h-2.907l-.875-12zM6 21h20v4h-2v-2H8v2H6v-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPalletSolid;
