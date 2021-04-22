import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgXRaySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm8 1v1h-3v2h3v1h-5v2h5v1h-4v2h4v2.563c-.523-.27-1.113-.563-1.5-.563a1.5 1.5 0 000 3c.379 0 1.672 1 2.5 1 .828 0 2.121-1 2.5-1a1.5 1.5 0 000-3c-.387 0-.977.293-1.5.563V8h-2zm3 1v2h2V9h-2zm0 3v2h4v-2h-4zm0 3v2h3v-2h-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgXRaySolid;
