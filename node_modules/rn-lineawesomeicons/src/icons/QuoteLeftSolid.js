import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgQuoteLeftSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.219 1.781-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.219 1.781-4 4-4V8zM6 16h6v6H6v-6zm14 0h6v6h-6v-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgQuoteLeftSolid;
