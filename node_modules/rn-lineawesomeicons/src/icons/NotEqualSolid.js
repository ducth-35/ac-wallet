import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNotEqualSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6.719 5.281L5.28 6.72l20 20 1.438-1.438L21.437 20H27v-2h-7.563l-4-4H27v-2H13.437L6.72 5.281zM5 12v2h4.906l-2-2H5zm0 6v2h10.906l-2-2H5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgNotEqualSolid;
