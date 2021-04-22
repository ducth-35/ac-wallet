import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFulcrum(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 0l-1.28 12.2L10.1 16l3.62 3.8L15 32V19l-3-3 3-3V0zm2 0v13l3 3-3 3v13l1.28-12.2L21.9 16l-3.62-3.8L17 0zM9.5 7L7 10l2.5 3 2.5-3-2.5-3zm13 0L20 10l2.5 3 2.5-3-2.5-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFulcrum;
