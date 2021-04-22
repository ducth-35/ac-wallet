import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLaptopSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 6v13.563l-2.281 2.312A2.451 2.451 0 002 23.594 2.417 2.417 0 004.406 26h23.188A2.417 2.417 0 0030 23.594a2.45 2.45 0 00-.719-1.719L27 19.562V6H5zm2 2h18v11H7V8zm-.563 13h19.125l2.313 2.281a.465.465 0 01.125.313.385.385 0 01-.406.406H4.406A.385.385 0 014 23.594c0-.11.047-.235.125-.313L6.438 21z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLaptopSolid;
