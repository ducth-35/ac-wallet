import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgServerSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 6v20h26V6H3zm2 2h22v4H5V8zm2 1v2h8V9H7zm17 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM5 14h22v4H5v-4zm2 1v2h8v-2H7zm17 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM5 20h22v4H5v-4zm2 1v2h8v-2H7zm17 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgServerSolid;
