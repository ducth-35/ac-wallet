import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgListSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 5v6h6V5H4zm2 2h2v2H6V7zm6 0v2h15V7H12zm-8 6v6h6v-6H4zm2 2h2v2H6v-2zm6 0v2h15v-2H12zm-8 6v6h6v-6H4zm2 2h2v2H6v-2zm6 0v2h15v-2H12z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgListSolid;
