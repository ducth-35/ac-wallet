import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgReceiptSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7 5.375V13H3v14h26V13h-4V5.375l-3 1.5-2-1-2 1-2-1-2 1-2-1-2 1-3-1.5zm5 2.75l2 1 2-1 2 1 2-1 2 1 1-.5V17H9V8.625l1 .5 2-1zM5 15h2v4h18v-4h2v10H5V15zm4 6v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgReceiptSolid;
