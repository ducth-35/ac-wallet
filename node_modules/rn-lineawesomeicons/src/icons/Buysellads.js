import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBuysellads(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11.188 6l-.22.688-5.905 18L4.625 26h7.344l.281-.219L18.125 21l1.156 4.25.219.75h7.906l-.468-1.313-6.063-18-.25-.687h-9.438zm1.468 2h6.531l5.438 16H21L17.062 9.469l-.187-.75h-1.719l-.219.719-2.656 9.28L11.906 20h4.281l-4.906 4H7.375l5.281-16zm3.313 5.094L17.313 18h-2.75l1.406-4.906z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBuysellads;
