import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileCode(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 3v26h20V9.594l-.281-.313-6-6L19.406 3H6zm2 2h10v6h6v16H8V5zm12 1.438L22.563 9H20V6.437zM16 13l-2 12h2l2-12h-2zm-3.781 2.375l-2.5 3-.531.625.53.625 2.5 3 1.563-1.25L11.812 19l1.97-2.375-1.563-1.25zm7.562 0l-1.562 1.25L20.187 19l-1.968 2.375 1.562 1.25 2.5-3 .532-.625-.532-.625-2.5-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFileCode;
