import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAddressBook(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 4v5H5v2h3V6h16v20H8v-3H6v5h20V4H6zm10 6c-2.2 0-4 1.8-4 4 0 1.113.477 2.117 1.219 2.844A5.041 5.041 0 0011 21h2a3 3 0 016 0h2a5.041 5.041 0 00-2.219-4.156C19.523 16.117 20 15.114 20 14c0-2.2-1.8-4-4-4zM6 12v2H5v2h3v-4H6zm10 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zM6 17v2H5v2h3v-4H6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAddressBook;
