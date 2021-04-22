import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPasteSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 3c-1.258 0-2.152.89-2.594 2H5v23h8v2h14V14h-2V5h-7.406C17.152 3.89 16.258 3 15 3zm0 2c.555 0 1 .445 1 1v1h3v2h-8V7h3V6c0-.555.445-1 1-1zM7 7h2v4h12V7h2v7H13v12H7V7zm8 9h10v12H15V16z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPasteSolid;
