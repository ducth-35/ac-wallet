import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgClipboardCheckSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 2c-1.258 0-2.152.89-2.594 2H5v25h22V4h-8.406C18.152 2.89 17.258 2 16 2zm0 2c.555 0 1 .445 1 1v1h3v2h-8V6h3V5c0-.555.445-1 1-1zM7 6h3v4h12V6h3v21H7V6zm14.281 7.281L15 19.562l-3.281-3.28-1.438 1.437 4 4 .719.687.719-.687 7-7-1.438-1.438z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgClipboardCheckSolid;
