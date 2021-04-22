import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHouzz(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 2.281L8 6.844V16l8-4.563V2.281zm0 9.156L24 16V6.844l-8 4.593zM24 16l-8 4.563v9.156l8-4.563V16zm-8 4.563L8 16v9.156l8-4.593z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHouzz;
