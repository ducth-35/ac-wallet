import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSubwaySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10 4C7.25 4 5 6.25 5 9v12a6.013 6.013 0 003.531 5.469L6 29h2.344l2.031-2.031c.2.02.418.031.625.031h10c.207 0 .426-.012.625-.031L23.656 29H26l-2.531-2.531A6.013 6.013 0 0027 21V9c0-2.75-2.25-5-5-5H10zm0 2h12c1.32 0 2.438.828 2.844 2H7.156A2.992 2.992 0 0110 6zm-3 4h8v6H7v-6zm10 0h8v6h-8v-6zM7 18h18v3c0 2.219-1.781 4-4 4H11c-2.219 0-4-1.781-4-4v-3zm3.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSubwaySolid;
