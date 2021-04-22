import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRoadSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5.469 6l-.188.75-4.656 18L.281 26H31.72l-.344-1.25-4.656-18L26.53 6H5.47zM7.03 8h8.094l-.063 3h1.876l-.063-3h8.094l4.156 16H17.281l-.093-4h-2.375l-.094 4H2.875L7.031 8zM15 13l-.125 5h2.25L17 13h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRoadSolid;
