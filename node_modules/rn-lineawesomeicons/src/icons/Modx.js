import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgModx(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7 4.242v11.992l1.855 1.213L3.89 25h12.486l1.146-1.715L25 27.765V15.44l-1.82-1.116L27.816 7H15.481l-1.133 1.607L7 4.242zm2 3.516l4.191 2.49 6.13 3.643-9.128 2.04L9 15.153V7.758zM16.52 9h7.664l-2.508 3.96-5.604-3.327L16.52 9zm3.632 6.756L15.307 23h-7.71l3.423-5.203 9.132-2.041zm2.159.38l.689.425v7.673l-4.328-2.59 3.639-5.507z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgModx;
