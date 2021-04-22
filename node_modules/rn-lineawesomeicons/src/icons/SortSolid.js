import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSortSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.594l-.719.687-8 8L5.594 14h20.812l-1.687-1.719-8-8L16 3.594zm0 2.844L21.563 12H10.438L16 6.437zM5.594 18l1.687 1.719 8 8 .719.687.719-.687 8-8L26.406 18H5.594zm4.843 2h11.126L16 25.563 10.437 20z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSortSolid;
