import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWindowCloseSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm4.688 3.313l-1.407 1.406L14.562 16l-4.343 4.344 1.406 1.406 4.344-4.344 4.312 4.313 1.407-1.407L17.375 16l4.25-4.25-1.406-1.406-4.25 4.25-4.281-4.281z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgWindowCloseSolid;
