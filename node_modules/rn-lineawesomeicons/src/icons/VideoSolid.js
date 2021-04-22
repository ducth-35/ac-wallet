import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVideoSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 8v16h22v-3.375l6 3V8.375l-6 3V8H2zm2 2h18v12H4V10zm24 1.625v8.75l-4-2v-4.75l4-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVideoSolid;
