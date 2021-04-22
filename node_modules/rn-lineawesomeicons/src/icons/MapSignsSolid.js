import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMapSignsSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 5v2H5v9h20.469l.281-.344 3.563-4.156-3.563-4.156L25.469 7H17V5h-2zM7 9h17.531l2.157 2.5L24.53 14H7V9zm8 8v10h2V17h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMapSignsSolid;
