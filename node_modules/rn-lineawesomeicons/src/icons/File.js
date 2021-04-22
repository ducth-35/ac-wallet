import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFile(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 3v26h20V9.594l-.281-.313-6-6L19.406 3H6zm2 2h10v6h6v16H8V5zm12 1.438L22.563 9H20V6.437z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFile;
