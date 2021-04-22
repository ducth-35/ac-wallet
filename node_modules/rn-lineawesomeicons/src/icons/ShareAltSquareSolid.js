import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShareAltSquareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm13 3a2 2 0 00-1.992 2.156L13.32 14.5a2 2 0 100 3l4.688 2.344a2 2 0 003.406 1.57A2 2 0 0018.68 18.5l-4.688-2.344a2.011 2.011 0 000-.312L18.68 13.5A2 2 0 1020 10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgShareAltSquareSolid;
