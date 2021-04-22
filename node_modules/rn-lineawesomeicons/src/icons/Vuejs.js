import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVuejs(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 6l13 22L29 6H19l-3 5.3L13 6H3zm3.5 2h3.771L16 18l5.729-10H25.5L16 24.1 6.5 8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVuejs;
