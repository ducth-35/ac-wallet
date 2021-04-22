import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCalculatorSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 3v26h20V3H6zm2 2h16v22H8V5zm2 2v6h12V7H10zm2 2h8v2h-8V9zm-1 6v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCalculatorSolid;
