import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUndoAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C12 3 8.4 4.8 6 7.7V4H4v8h8v-2H6.8c2-3 5.3-5 9.2-5 6.1 0 11 4.9 11 11s-4.9 11-11 11S5 22.1 5 16H3c0 7.2 5.8 13 13 13s13-5.8 13-13S23.2 3 16 3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUndoAltSolid;
