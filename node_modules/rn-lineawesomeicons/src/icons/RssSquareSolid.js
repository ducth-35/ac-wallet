import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRssSquareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm5 3c-.684 0-1.355.055-2 .188v2.062a7.859 7.859 0 012-.25c4.41 0 8 3.59 8 8 0 .691-.086 1.36-.25 2h2.063A9.924 9.924 0 0022 20c0-5.516-4.484-10-10-10zm0 4c-.703 0-1.371.121-2 .344v2.219A3.968 3.968 0 0112 16c2.207 0 4 1.793 4 4 0 .73-.219 1.41-.563 2h2.22A5.958 5.958 0 0018 20c0-3.309-2.691-6-6-6zm0 4a1.999 1.999 0 100 4 1.999 1.999 0 100-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRssSquareSolid;
