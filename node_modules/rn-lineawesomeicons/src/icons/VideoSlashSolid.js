import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVideoSlashSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3.719 2.281L2.28 3.72l26 26 1.438-1.438L24 22.563v-1.938l6 3V8.375l-6 3V8H9.437L3.72 2.281zM2 8v16h18l-2-2H4V10h2L4 8H2zm9.438 2H22v10.563L11.437 10zM28 11.625v8.75l-4-2v-4.75l4-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVideoSlashSolid;
