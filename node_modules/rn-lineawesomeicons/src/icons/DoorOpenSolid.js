import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDoorOpenSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15.875 4l-.094.031-8 1.875L7 6.094v20.25l.813.125 8 1.5.093.031H18V4h-2.125zM20 6v2h3v16h-3v2h5V6h-5zm-4 .031V26l-7-1.313V7.657l7-1.626zM14.344 15c-.367 0-.688.45-.688 1s.32 1 .688 1c.367 0 .656-.45.656-1s-.29-1-.656-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDoorOpenSolid;
