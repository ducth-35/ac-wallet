import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTrainSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M14 3c-1.258 0-2.152.89-2.594 2H10c-2.75 0-5 2.25-5 5v11a6.013 6.013 0 003.531 5.469L6 29h2.344l2.031-2.031c.2.02.418.031.625.031h10c.207 0 .426-.012.625-.031L23.656 29H26l-2.531-2.531A6.013 6.013 0 0027 21V10c0-2.75-2.25-5-5-5h-1.406C20.152 3.89 19.258 3 18 3h-4zm0 2h4c.566 0 1 .434 1 1v1h3c1.32 0 2.438.828 2.844 2H7.156A2.992 2.992 0 0110 7h3V6c0-.566.434-1 1-1zm-7 6h18v5H7v-5zm0 7h18v3c0 2.219-1.781 4-4 4H11c-2.219 0-4-1.781-4-4v-3zm9 1a1.999 1.999 0 100 4 1.999 1.999 0 100-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTrainSolid;
