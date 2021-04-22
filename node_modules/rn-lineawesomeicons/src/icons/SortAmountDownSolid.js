import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSortAmountDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 5v2h12V5H4zm17 0v18.688l-2.594-2.594L17 22.5l4.281 4.313.719.687.719-.688L27 22.5l-1.406-1.406L23 23.687V5h-2zM4 9v2h10V9H4zm0 4v2h8v-2H4zm0 4v2h6v-2H4zm0 4v2h4v-2H4zm0 4v2h2v-2H4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSortAmountDownSolid;
